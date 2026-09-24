function abrirTela(id) {

    document
        .querySelectorAll(".tela")
        .forEach(t => t.classList.remove("ativa"));

    document
        .getElementById(id)
        .classList.add("ativa");

}

function getIdMaquina(){

    const parametros = new URLSearchParams(window.location.search);

    return parametros.get("maquina");

}

document.addEventListener("DOMContentLoaded", function () {

    const maquinaId = getIdMaquina();

    const elemento =
        document.getElementById("identificacaoMaquina");

    if (elemento) {

        if (maquinaId) {
            elemento.textContent = maquinaId;
        } else {
            elemento.textContent = "Não identificada";
        }

    }

});


/* =========================================
   IDENTIFICAÇÃO DA MÁQUINA PARA O SAC
   ========================================= */

function obterMachineIdSAC() {

    const parametros =
        new URLSearchParams(window.location.search);

    return parametros.get("maquina") || "";

}


/* =========================================
   ABRIR CHAMADO SAC
   ========================================= */

async function abrirChamadoSAC(
    problema,
    descricao,
    nomeCliente = "",
    telefoneCliente = ""
) {

    const machineId = obterMachineIdSAC();

    if (!machineId) {

        console.error(
            "Máquina não identificada."
        );

        return false;

    }


    try {

        const resposta =
            await fetch(
                "https://zjrdlxewuvkuzhazbark.supabase.co/rest/v1/chamados_sac",
                {

                    method: "POST",

                    headers: {

                        "apikey":
                            "sb_publishable_DLqfmdx64p2mdUQU1IWALA_fp-DvUnL",

                        "Authorization":
                            "Bearer sb_publishable_DLqfmdx64p2mdUQU1IWALA_fp-DvUnL",

                        "Content-Type":
                            "application/json",

                        "Prefer":
                            "return=representation"

                    },

                    body: JSON.stringify({

                        machine_id:
                            machineId,

                        nome_cliente:
                            nomeCliente || null,

                        telefone_cliente:
                            telefoneCliente || null,

                        problema:
                            problema,

                        descricao:
                            descricao || null,

                        status:
                            "pendente"

                    })

                }
            );


        if (!resposta.ok) {

            const erro =
                await resposta.text();

            console.error(
                "Erro ao criar chamado SAC:",
                erro
            );

            return false;

        }


        console.log(
            "Chamado SAC criado com sucesso."
        );

        return true;


    } catch (erro) {

        console.error(
            "Erro ao enviar chamado SAC:",
            erro
        );

        return false;

    }

}
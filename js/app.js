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
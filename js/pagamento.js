const maquinaId = getIdMaquina();

console.log("ID da máquina:", maquinaId);

const perguntas = {

    inicio:{

        mensagem:"Como foi realizado o pagamento?",

        botoes:[

            {
                texto:"PIX",
                proximo:"pix"
            },

            {
                texto:"CARTÃO",
                proximo:"cartao1"
            }

        ]

    },

    comoUsar:{

        mensagem:`
            <h2>📖 Como utilizar a máquina</h2>

            <p><strong>1️⃣ Clique na área indicada <em>"CLIQUE AQUI PARA COMPRAR"</em>.</strong></p>

            <p><strong>2️⃣ Adicione os produtos ao carrinho</strong> clicando no botão <strong>➕</strong> ao lado de cada item desejado.</p>

            <p><strong>3️⃣ Após escolher os produtos, clique em <em>"Ver Carrinho"</em>.</strong></p>

            <p><strong>4️⃣ Confira os itens selecionados</strong> e escolha a forma de pagamento:</p>

            <ul>
                <li>💳 Cartão de Débito</li>
                <li>💳 Cartão de Crédito</li>
                <li>📱 PIX</li>
            </ul>

            <p><strong>5️⃣ Se escolher PIX</strong>, leia o QR Code exibido na tela e aguarde a confirmação do pagamento.</p>

            <p><strong>6️⃣ Se escolher Cartão</strong>, clique no <strong>botão verde da maquininha</strong>, aproxime ou insira o cartão e siga as instruções da maquininha.</p>

            <p><strong>7️⃣ Após a confirmação do pagamento</strong>, seu produto será liberado automaticamente.</p>

            <p><strong>8️⃣ Abra a porta inferior da máquina</strong> e retire sua compra.</p>

            <hr>

            <p>❓ <strong>Encontrou algum problema?</strong><br>
            Volte ao menu inicial e selecione a opção correspondente para que eu possa ajudá-lo.</p>
        `,

        botoes:[
        ]

    },

    pix:{

        mensagem:"Você conseguiu realizar a leitura do QR Code para pagamento via PIX?",

        botoes:[

            {
                texto:"✅ Sim",
                proximo:"pixPagamento"
            },

            {
                texto:"❌ Não",
                proximo:"pixQrCode"
            }

        ]

    },

    pixQrCode:{

        mensagem:"Verifique se a câmera do celular está conseguindo visualizar todo o QR Code exibido na tela da máquina.<br><br>Se necessário, aumente o brilho da tela do celular e tente realizar a leitura novamente.",

        botoes:[

            {
                texto:"✅ Consegui ler",
                proximo:"pixPagamento"
            },

            {
                 texto:"❌ Ainda não consegui",
                proximo:"abrirChamado"
            }

        ]

    },

    pixPagamento:{

        mensagem:"O pagamento via PIX foi concluído com sucesso no aplicativo do seu banco?",

        botoes:[

            {
                texto:"✅ Sim",
                proximo:"pixConfirmacao"
            },

            {
                texto:"❌ Não",
                proximo:"pixNaoPago"
            }

        ]

    },

    pixNaoPago:{

        mensagem:"O pagamento não foi concluído.<br><br>Verifique se há saldo disponível e tente realizar o pagamento novamente.",

        botoes:[

            {
                texto:"✅ Consegui pagar",
                proximo:"pixConfirmacao"
            },

            {
                texto:"❌ Ainda não consegui",
                proximo:"abrirChamado"
            }

        ]

    },

    pixConfirmacao:{

        mensagem:"Após concluir o PIX, você aguardou alguns segundos para que a máquina confirmasse o pagamento?<br><br>Em alguns locais essa confirmação pode demorar um pouco devido à conexão com a internet.",

        botoes:[

            {
                texto:"✅ Sim",
                proximo:"pixMotor"
            },

            {
                texto:"❌ Não",
                proximo:"pixAguardar"
            }

        ]

    },

    pixAguardar:{

        mensagem:"Sem problemas! 😊<br><br>Após concluir o PIX, aguarde aproximadamente 30 segundos para que a máquina receba a confirmação do pagamento.<br><br>Agora a máquina confirmou o pagamento?",

        botoes:[

            {
                texto:"✅ Sim",
                proximo:"pixMotor"
            },

            {
                texto:"❌ Não",
                proximo:"abrirChamado"
            }

        ]

    },

    pixMotor:{

        mensagem:"Após a confirmação do pagamento, o motor da máquina chegou a girar?",

        botoes:[

            {
                texto:"✅ Sim",
                proximo:"pixProduto"
            },

            {
                texto:"❌ Não",
                proximo:"motorNaoGirou"
            }

        ]

    },

    pixProduto:{

        mensagem:"O produto caiu normalmente?",

        botoes:[

            {
                texto:"✅ Sim",
                proximo:"fim"
            },

            {
                texto:"❌ Não",
                proximo:"produtoNaoCaiu"
            }

        ]

    },

    cartao1:{

        mensagem:"Você clicou no botão verde da maquininha antes de inserir ou aproximar o cartão?",

        botoes:[

            {
                texto:"Sim",
                proximo:"cartao2"
            },

            {
                texto:"Não",
                proximo:"cartaoVerde"
            }

        ]

    },

    cartaoVerde:{

        mensagem:"Sem problemas! 😊\n\nPara iniciar o pagamento é necessário pressionar o botão VERDE da maquininha antes de inserir ou aproximar o cartão.\n\nDepois disso, tente realizar o pagamento novamente.",

        botoes:[

            {
                texto:"✅ Resolvido",
                proximo:"fim"
            },

            {
                texto:"❌ Ainda não resolveu",
                proximo:"cartao2"
            }

        ]

    },

    cartao2:{

        mensagem:"O pagamento foi aprovado?",

        botoes:[

            {
                texto:"Sim",
                proximo:"cartao3"
            },

            {
                texto:"Não",
                proximo:"cartaoNaoAprovado"
            }

        ]

    },

    cartaoNaoAprovado:{

        mensagem:"O pagamento não foi aprovado.\n\nVerifique se o cartão possui saldo ou limite disponível.\n\nTambém recomendamos fechar a maquininha e tentar novamente.",

        botoes:[

            {
                texto:"✅ Consegui pagar",
                proximo:"cartao3"
            },

            {
                texto:"❌ Ainda não resolveu",
                proximo:"abrirChamado"
            }

        ]

    },

    cartao3:{

        mensagem:"O motor da máquina chegou a girar?",

        botoes:[

            {
                texto:"Sim",
                proximo:"cartao4"
            },

            {
                texto:"Não",
                proximo:"motorNaoGirou"
            }

        ]

    },

    motorNaoGirou:{

        mensagem:"O pagamento foi aprovado, porém o motor da máquina não girou.<br><br>Será necessário abrir um chamado para que nossa equipe técnica possa verificar o ocorrido.",

        botoes:[

            {
                texto:"📋 Abrir chamado",
                proximo:"abrirChamado"
            }

        ]

    },

    cartao4:{

        mensagem:"O produto caiu normalmente?",

        botoes:[

            {
                texto:"Sim",
                proximo:"fim"
            },

            {
                texto:"Não",
                proximo:"produtoNaoCaiu"
            }

        ]

    },

    produtoNaoCaiu:{

        seletorProdutos:true,

        titulo:"Qual produto não foi liberado?"

    },

    abrirChamado:{

        mensagem:"Não foi possível resolver seu problema através do atendimento automático.<br><br>Vamos abrir um chamado para nossa equipe técnica.<br><br>Assim que possível, um de nossos técnicos entrará em contato com você.",

        botoes:[

            {
                texto:"📋 Abrir chamado",
                proximo:"dadosCliente"
            }

        ]

    },

    dadosCliente:{

        formulario:true,

        mensagem:"Para registrar seu chamado, informe os dados abaixo."

    },

    fim:{

        mensagem:`

    ✅ Atendimento finalizado!

    Esperamos que sua dúvida tenha sido resolvida.

    Caso precise de ajuda novamente, estaremos sempre à disposição.

    Agradecemos por utilizar a Creality Tecnologia.

    `,

        botoes:[
            {
                texto:"🏠 Voltar ao início",
                proximo:"telaInicio"
            }
        ]

    },

    catalogoResolvido:{

        mensagem:`

    ✅ Pronto!

    O catálogo foi aberto com sucesso.

    Agora você já pode realizar sua compra normalmente.

    Obrigado por utilizar a Creality Tecnologia.

    `,

        botoes:[
            {
                texto:"🏠 Voltar ao início",
                proximo:"telaInicio"
            }
        ]

    },

    chamadoEnviado:{

        mensagem:"",

        botoes:[

            {
                texto:"🏠 Voltar ao início",
                proximo:"telaInicio"
            }

        ]

    },

    produtoInicio:{

    mensagem:"Qual problema você encontrou com o produto?",

    botoes:[

        {
            texto:"📦 Produto não caiu",
            proximo:"produtoNaoCaiu"
        },

        {
            texto:"📋 Produto aparece no catálogo, mas não está na máquina",
            proximo:"produtoSemEstoque"
        },

        {
            texto:"📦 Produto está na máquina, mas não aparece para compra",
            proximo:"produtoTemEstoque"
        },

        {
            texto:"💬 Outro problema",
            proximo:"outroProblemaProduto"
        }

    ]

    },

    produtoSemEstoque:{

        seletorProdutos:true,

        titulo:"Qual produto aparece no catálogo, mas não está na máquina?"

    },

    produtoTemEstoque:{

        seletorProdutos:true,

        titulo:"Qual produto está na máquina, mas não aparece para compra?"

    },

    outroProblemaProduto:{

        formularioOutroProblema:true,

        mensagem:"Descreva abaixo o problema encontrado com o produto."

    },

    maquinaInicio:{

        mensagem:"Qual problema você encontrou na máquina?",

        botoes:[

            {
                texto:"🛜 Máquina sem internet",
                proximo:"maquinaSemInternet"
            },

            {
                texto:"📱 Catálogo não abriu",
                proximo:"catalogoNaoAbriu"
            }

        ]

    },

    maquinaSemInternet:{

        mensagem:`

    Recebemos sua informação.

    Clique em <strong>Enviar informação</strong> para que ela seja encaminhada à nossa equipe técnica.

    `,

        enviarInformacao:true

    },

    reclamacaoInicio:{

        mensagem:"O que você gostaria de nos enviar?",
 
        botoes:[

            {
                texto:"💡 Enviar uma sugestão",
                proximo:"enviarSugestao"
            },

            {
                texto:"⚠️ Fazer uma reclamação",
                proximo:"enviarReclamacao"
            }

        ]

    },

    enviarSugestao:{

        formularioSugestao:true,

        titulo:"Sugestão"

    },

    enviarReclamacao:{

        formularioSugestao:true,

        titulo:"Reclamação"

    },

        catalogoNaoAbriu:{

            mensagem:"O painel da máquina está ligado?",

            botoes:[

                {
                    texto:"🟢 Sim",
                    proximo:"catalogoPainelLigado"
                },

                {
                    texto:"🔴 Não",
                    proximo:"catalogoPainelDesligado"
                }

            ]

        },

        catalogoPainelDesligado:{

           mensagem:`

        Recebemos sua informação.

        Clique em <strong>Enviar informação</strong> para que ela seja encaminhada à nossa equipe técnica.

        `,

            enviarInformacao:true

        },

        catalogoPainelLigado:{

            mensagem:`

        Ótimo.

        Vamos tentar resolver em poucos segundos.

        `,

            tutorialAndroid:true

        },

        catalogoAbriuPergunta:{

            mensagem:"O catálogo abriu?",

            botoes:[

                {
                    texto:"🟢 Sim",
                    proximo:"tutorialAndroid2"
                },

                {
                    texto:"🔴 Não",
                    proximo:"catalogoNaoResolveu"
                }

            ]

        },

    tutorialAndroid2:{

        mensagem:`

    Agora toque fora da mensagem exibida pelo Android
    ou pressione OK para fechá-la.

    `,

        tutorialAndroid2:true

    },

    catalogoAbriuAgora:{

        mensagem:"O catálogo abriu agora?",

        botoes:[

            {
                texto:"🟢 Sim",
                proximo:"catalogoResolvido"
            },

            {
                texto:"🔴 Não",
                proximo:"catalogoNaoResolveu"
            }

        ]

    },

    catalogoNaoResolveu:{

        mensagem:`

    Não foi possível resolver o problema automaticamente.

    Clique em <strong>Enviar informação</strong> para que nossa equipe técnica seja notificada e verifique esta máquina.

    `,

        enviarInformacao:true

    },
}

function mostrarPergunta(nome){

    console.log("Abrindo fluxo:", nome);

    const pergunta = perguntas[nome];

    if(pergunta.seletorProdutos){

        let callback = "produtoSelecionado";

        if(nome == "produtoSemEstoque"){
            callback = "produtoSemEstoqueSelecionado";
        }

        if(nome == "produtoTemEstoque"){
            callback = "produtoTemEstoqueSelecionado";
        }

        mostrarSeletorProdutos(
            pergunta.titulo,
            callback
        );

        return;

    }

    if(pergunta.tutorialAndroid){

        mostrarTutorialAndroid();
 
        return;

    }

    if(pergunta.tutorialAndroid2){

        mostrarTutorialAndroid2();

        return;

    }

    let html = `

        <div class="card-pergunta">

            <img src="img/sara.png" class="mini-sara">

            <p>${pergunta.mensagem.replace(/\n/g,"<br>")}</p>

        </div>

    `;

    if(pergunta.formulario){

        html += `

            <div class="formulario-sac">

                <input
                    type="text"
                    id="nomeCliente"
                    placeholder="Seu primeiro nome">

                <input
                    type="tel"
                    id="telefoneCliente"
                    placeholder="Telefone / WhatsApp">

                <button
                    class="opcao"
                    onclick="enviarChamado()">

                    📤 Enviar chamado

                </button>

            </div>

        `;

    }else if(pergunta.formularioOutroProblema){

        html += `

            <div class="formulario-sac">

                <textarea
                    id="descricaoProblema"
                    placeholder="Conte para nós o que aconteceu, e se necessário deixe seu número e nome para contato..."
                    rows="6"></textarea>

                <button
                    class="opcao"
                    onclick="enviarOutroProblema()">

                    📤 Enviar informação

                </button>

            </div>

        `;
    }

    else if(pergunta.formularioSugestao){

        mostrarFormularioSugestao(
            pergunta.titulo
        );

        return;

    }

    else if(pergunta.enviarInformacao){

    html += `

        <div class="formulario-sac">

            <button
                class="opcao"
                onclick="enviarInformacaoMaquina()">

                📤 Enviar informação

            </button>

        </div>

    `;

    }else{

        pergunta.botoes.forEach(botao => {

            let acao;

            if(botao.proximo == "telaInicio"){

                acao = "abrirTela('telaInicio')";

            }else{

                acao = `mostrarPergunta('${botao.proximo}')`;

            }

            html += `
        
                <div class="opcao"
                    onclick="${acao}">

                    ${botao.texto}

                </div>

            `;

        });

    }

    html += `

        <div style="margin-top:25px;text-align:center;">

            <button class="btn-voltar"
                    onclick="abrirTela('telaInicio')">

                <i class="fa-solid fa-rotate-left"></i>

                🏠 Voltar ao SAC

            </button>

        </div>

    `;

    document.getElementById("conteudoPagamento").innerHTML = html;

}


function enviarChamado(){

    const nome = document.getElementById("nomeCliente").value.trim();
    const telefone = document.getElementById("telefoneCliente").value.trim();

    if(nome === "" || telefone === ""){

        alert("Informe seu primeiro nome e telefone.");
        return;

    }

    perguntas.chamadoEnviado.mensagem = `

✅ Chamado registrado com sucesso!

Obrigado, ${nome}!

Recebemos sua solicitação e ela foi encaminhada para nossa equipe técnica.

Caso seja necessário, nossa equipe entrará em contato através do telefone informado para dar andamento ao atendimento.

Agradecemos pela confiança na Creality Tecnologia.

`;

    mostrarPergunta("chamadoEnviado");

}

function mostrarTutorialAndroid(){

    let html = `

        <div class="card-pergunta">

            <img src="img/sara.png" class="mini-sara">

            <p>

                Toque no símbolo do Android para abrir o catálogo.

            </p>

        </div>

        <div class="formulario-sac">

            <img
                src="img/tutorial_android.png"
                class="img-tutorial">

            <button
                class="opcao"
                onclick="mostrarPergunta('catalogoAbriuPergunta')">

                ✔ Já fiz isso

            </button>

        </div>

    `;

    document.getElementById("conteudoPagamento").innerHTML = html;

}

function mostrarTutorialAndroid2(){

    let html = `

        <div class="card-pergunta">

            <img src="img/sara.png"
                 class="mini-sara">

            <p>

                Caso apareça uma mensagem do Android,
                toque fora dela ou pressione OK para fechá-la.

            </p>

        </div>

        <div class="formulario-sac">

            <img
                src="img/tutorial_android2.png"
                class="img-tutorial">

            <button
                class="opcao"
                onclick="mostrarPergunta('catalogoAbriuAgora')">

                ✔ Entendi

            </button>

        </div>

    `;

    document.getElementById("conteudoPagamento").innerHTML = html;

}

function enviarInformacaoMaquina(){

    perguntas.chamadoEnviado.mensagem = `

✅ Informação enviada com sucesso!

Recebemos sua solicitação e nossa equipe técnica verificará esta máquina o mais breve possível.

Agradecemos pela sua colaboração. Ela é muito importante para manter nossos equipamentos funcionando corretamente.

`;

    mostrarPergunta("chamadoEnviado");

}

function mostrarFormularioSugestao(tipo){

    let html = `

        <div class="card-pergunta">

            <img src="img/sara.png"
                 class="mini-sara">

            <h2>${tipo}</h2>

            <p>

                Descreva abaixo sua ${tipo.toLowerCase()}.

            </p>

            <small>

                Nome e telefone são opcionais.

                Informe apenas se desejar que nossa equipe entre em contato.

            </small>

        </div>

        <div class="formulario-sac">

            <textarea
                id="mensagemSugestao"
                rows="6"
                placeholder="Digite aqui..."></textarea>

            <input
                id="nomeSugestao"
                placeholder="Nome (opcional)">

            <input
                id="telefoneSugestao"
                placeholder="Telefone (opcional)">

            <button
                class="opcao"
                onclick="enviarSugestaoReclamacao('${tipo}')">

                📤 Enviar

            </button>

        </div>

    `;

    document.getElementById("conteudoPagamento").innerHTML = html;

}

function enviarSugestaoReclamacao(tipo){

    const mensagem =
        document.getElementById("mensagemSugestao").value.trim();

    if(mensagem==""){

        alert("Descreva sua mensagem.");

        return;

    }

    perguntas.chamadoEnviado.mensagem = `

✅ Mensagem enviada com sucesso!

Obrigado por dedicar um momento para nos ajudar.

Sua ${tipo.toLowerCase()} foi registrada.

Ela será analisada por nossa equipe e contribuirá para melhorar continuamente nossos produtos e serviços.

`;

    mostrarPergunta("chamadoEnviado");

}
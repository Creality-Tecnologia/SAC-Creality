let chamadoProduto = {

    id: null,

    nome: null,

    imagem: null,

    pagamento: null,

    nomeCliente: null,

    telefone: null

};

async function mostrarSeletorProdutos(titulo, callback){

    const parametros = new URLSearchParams(window.location.search);

    const idMaquina =
    parametros.get("maquina") || "tabacaria";

    const produtos = await buscarProdutos(idMaquina);

    let html = `

        <div class="card-pergunta">

            <img src="img/sara.png" class="mini-sara">

            <p>${titulo}</p>

        </div>

        <div class="grid-produtos">

    `;

    produtos.forEach(produto=>{

        html += `

            <div class="produto-card"

                onclick="${callback}(${produto.id}, '${produto.nome}', '${produto.img_url}')">

                <img src="${produto.img_url}">

                <span>${produto.nome}</span>

            </div>

        `;

    });

    html += `

        </div>

    `;

    document.getElementById("conteudoPagamento").innerHTML = html;

}

function produtoSelecionado(id, nome, imagem){

    chamadoProduto.id = id;
    chamadoProduto.nome = nome;
    chamadoProduto.imagem = imagem;

    let html = `

        <div class="card-pergunta">

            <img src="${imagem}" class="mini-sara">

            <h2>${nome}</h2>

            <p>Qual foi a forma de pagamento?</p>

        </div>

        <div class="formulario-sac">

            <div class="opcao"
                 onclick="abrirChamadoProduto('${nome}','PIX')">

                📱 PIX

            </div>

            <div class="opcao"
                 onclick="abrirChamadoProduto('${nome}','Débito')">

                💳 Débito

            </div>

            <div class="opcao"
                 onclick="abrirChamadoProduto('${nome}','Crédito')">

                💳 Crédito

            </div>

        </div>

    `;

    document.getElementById("conteudoPagamento").innerHTML = html;

}

function abrirChamadoProduto(produto, pagamento){

    chamadoProduto.pagamento = pagamento;

    let html = `

        <div class="card-pergunta">

            <h2>${produto}</h2>

            <p>

                Forma de pagamento:

                <strong>${pagamento}</strong>

            </p>

            <p>

                Informe seu primeiro nome e telefone.

            </p>

        </div>

        <div class="formulario-sac">

            <input
                id="nomeCliente"
                placeholder="Primeiro nome">

            <input
                id="telefoneCliente"
                placeholder="Telefone / WhatsApp">

            <button
                class="opcao"
                onclick="enviarChamadoProduto('${produto}','${pagamento}')">

                📤 Enviar chamado

            </button>

        </div>

    `;

    document.getElementById("conteudoPagamento").innerHTML = html;

}

function enviarChamadoProduto(produto, pagamento){

    const nome =
        document.getElementById("nomeCliente").value;

    const telefone =
        document.getElementById("telefoneCliente").value;

    chamadoProduto.nomeCliente = nome;
    chamadoProduto.telefone = telefone;

    if(nome=="" || telefone==""){

        alert("Informe seu nome e telefone.");

        return;

    }

    perguntas.chamadoEnviado.mensagem = `

    ✅ Chamado registrado com sucesso!

    Obrigado, ${nome}!

    Produto:

    ${chamadoProduto.nome}

    Forma de pagamento:

    ${chamadoProduto.pagamento}

    ────────────────────────

    Recebemos sua solicitação.

    Nossa equipe realizará a conferência da venda e dará andamento ao processo de estorno ou à solução do atendimento.

    Se precisarmos de alguma informação adicional, entraremos em contato pelo telefone informado.

    ────────────────────────

    Agradecemos pela confiança na Creality Tecnologia e por nos ajudar a aprimorar continuamente nossos equipamentos e serviços.

    `;

    mostrarPergunta("chamadoEnviado");

}
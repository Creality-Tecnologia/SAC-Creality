async function selecionarProduto(idMaquina){

    const produtos = await buscarProdutos(idMaquina);

    let html = `

        <div class="card-pergunta">

            <img src="img/sara.png" class="mini-sara">

            <h2>Qual produto?</h2>

            <p>Selecione o produto correspondente.</p>

        </div>

        <div class="grid-produtos">

    `;

    produtos.forEach(produto=>{

        html += `

            <div class="produto-card">

                <img src="${produto.img_url}">

                <span>${produto.nome}</span>

            </div>

        `;

    });

    html += `</div>`;

    document.getElementById("conteudoPagamento").innerHTML = html;

}

function produtoSemEstoqueSelecionado(id,nome,imagem){

    chamadoProduto.id=id;
    chamadoProduto.nome=nome;
    chamadoProduto.imagem=imagem;

    let html=`

        <div class="card-pergunta">

            <img src="${imagem}" class="mini-sara">

            <h2>${nome}</h2>

            <p>

                Quantas unidades deste produto existem na máquina?

            </p>

        </div>

        <div class="formulario-sac">

            <input
                id="quantidadeProduto"
                type="number"
                min="0"
                placeholder="Quantidade encontrada">

            <button
                class="opcao"
                onclick="enviarProdutoSemEstoque()">

                📤 Enviar informação

            </button>

        </div>

    `;

    document.getElementById("conteudoPagamento").innerHTML=html;

}

function enviarProdutoSemEstoque(){

    const quantidade =
        document.getElementById("quantidadeProduto").value;

    if(quantidade==""){

        alert("Informe a quantidade.");

        return;

    }

    perguntas.chamadoEnviado.mensagem=`

✅ Informação recebida!

Produto:

${chamadoProduto.nome}

Quantidade informada:

${quantidade}

Recebemos sua informação.

Nossa equipe realizará a conferência do estoque da máquina e fará os ajustes necessários.

Agradecemos pela confiança na Creality Tecnologia e por nos ajudar a manter nossos catálogos sempre atualizados.

`;

    mostrarPergunta("chamadoEnviado");

}

function produtoTemEstoqueSelecionado(id,nome,imagem){

    chamadoProduto.id=id;
    chamadoProduto.nome=nome;
    chamadoProduto.imagem=imagem;

    let html=`

        <div class="card-pergunta">

            <img src="${imagem}" class="mini-sara">

            <h2>${nome}</h2>

            <p>

                Quantas unidades deste produto existem na máquina?

            </p>

        </div>

        <div class="formulario-sac">

            <input
                id="quantidadeProduto"
                type="number"
                min="0"
                placeholder="Quantidade encontrada">

            <button
                class="opcao"
                onclick="enviarProdutoTemEstoque()">

                📤 Enviar informação

            </button>

        </div>

    `;

    document.getElementById("conteudoPagamento").innerHTML=html;

}

function enviarProdutoTemEstoque(){

    const quantidade =
        document.getElementById("quantidadeProduto").value;

    if(quantidade==""){

        alert("Informe a quantidade.");

        return;

    }

    perguntas.chamadoEnviado.mensagem=`

✅ Informação recebida!

Produto:

${chamadoProduto.nome}

Quantidade informada:

${quantidade}

Recebemos sua informação.

Nossa equipe verificará o cadastro do produto e realizará os ajustes necessários para que ele volte a aparecer no catálogo da máquina.

Agradecemos pela confiança na Creality Tecnologia e por nos ajudar a aprimorar continuamente nossos equipamentos e serviços.

`;

    mostrarPergunta("chamadoEnviado");

}

function enviarOutroProblema(){

    const descricao =
        document.getElementById("descricaoProblema").value.trim();

    if(descricao==""){

        alert("Descreva o problema encontrado.");

        return;

    }

    perguntas.chamadoEnviado.mensagem=`

✅ Informação recebida!

Recebemos sua descrição e ela será analisada por nossa equipe.

Caso seja necessário obter mais informações, entraremos em contato.

Agradecemos pela confiança na Creality Tecnologia e por nos ajudar a aprimorar continuamente nossos equipamentos e serviços.

`;

    mostrarPergunta("chamadoEnviado");

}

function enviarInformacaoMaquina(){

    perguntas.chamadoEnviado.mensagem = `

✅ Informação recebida!

Nossa equipe técnica foi notificada e verificará a situação da máquina.

Obrigado por nos ajudar a manter nossos equipamentos funcionando corretamente.

`;

    mostrarPergunta("chamadoEnviado");

}
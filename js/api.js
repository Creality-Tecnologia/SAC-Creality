const API_BASE = "https://vendcrealitytec.com.br";

async function buscarProdutos(idMaquina){

    try{

        const resposta = await fetch(`${API_BASE}/api/produtos/${idMaquina}`);

        if(!resposta.ok){
            throw new Error("Erro ao buscar produtos.");
        }

        return await resposta.json();

    }catch(erro){

        console.error("Erro ao carregar produtos:", erro);

        return [];

    }

}
// Função para carregar e processar o arquivo JSON
async function loadAndProcessJSON() {
    try {
        // Usamos fetch para buscar o arquivo mercados.json
        const response = await fetch('mercados.json');
        
        // Verificamos se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }

        // Convertemos a resposta em JSON
        const jsonData = await response.json();

        // Função para gerar os elementos HTML dinamicamente
        gerarMercados(jsonData);

    } catch (error) {
        console.error("Erro ao carregar o arquivo JSON:", error);
    }
}

// Função para gerar os elementos HTML dinamicamente
function gerarMercados(data) {
    const mercadoArea = document.getElementById('mercadoArea'); // A área onde vamos adicionar os mercados

    // Itera sobre os dados JSON
    data.forEach(item => {
        // Cria a div do mercado parceiro
        const mercadoParceiro = document.createElement('div');
        mercadoParceiro.classList.add('mercadoParceiro');
        
        // Cria a imagem
        const mercadoImg = document.createElement('div');
        mercadoImg.classList.add('mercadoParceiroImg');
        const imgElement = document.createElement('img');
        imgElement.src = item.img;  // Define o caminho da imagem
        imgElement.alt = item.nome; // Define o nome para o atributo alt
        mercadoImg.appendChild(imgElement);

        // Cria o nome do mercado
        const nomeMercado = document.createElement('h2');
        nomeMercado.textContent = item.nome; // Define o nome do mercado

        // Adiciona a imagem e o nome ao mercadoParceiro
        mercadoParceiro.appendChild(mercadoImg);
        mercadoParceiro.appendChild(nomeMercado);

        // Adiciona o mercadoParceiro à área do mercado
        mercadoArea.appendChild(mercadoParceiro);
    });
}

// Chama a função para carregar e processar o JSON
loadAndProcessJSON();

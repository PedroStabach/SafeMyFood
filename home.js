
async function carregarSlides() {
  const resposta = await fetch('mercados.json');
  const dados = await resposta.json();
  totalSlides = dados.length;

  const area = document.getElementById('mercadoParceiroArea');

  dados.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'mercadoParceiro';
    slide.innerHTML = `<div class="mercadoParceiroImg"><img src="images/${item.img}" alt=""></div>
        <h2>${item.nome}</h2>`;
    area.appendChild(slide);
  });

}
carregarSlides();

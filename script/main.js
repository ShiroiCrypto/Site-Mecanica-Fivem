function calcularValor() {
  let total = 0;
  let totalComDesconto = 0;

  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  checkboxes.forEach(cb => {
    const valor = parseFloat(cb.getAttribute('data-valor'));
    const semDesconto = cb.getAttribute('data-sem-desconto') === 'true';

    if (!isNaN(valor)) {
      total += valor;
      totalComDesconto += semDesconto ? valor : valor * 0.8;
    }
  });

  document.getElementById('total').innerText = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  document.getElementById('desconto20').innerText = totalComDesconto.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function limparFormulario() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(cb => cb.checked = false);

  document.getElementById('total').innerText = 'R$ 0,00';
  document.getElementById('desconto20').innerText = 'R$ 0,00';
}

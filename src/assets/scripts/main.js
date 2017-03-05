(function () {
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      init();
    }
  };

  const MAX_SQUARE = 144;

  function init() {
    const container = document.getElementById('squares-container');

    container.addEventListener('click', (e) => {
      const el = e.target;
      const number = Number(el.id.split('square_').join(''));
      highLightMultiplesOf(number);
    });

    let innerHtml = '';
    for (let i = 0; i < MAX_SQUARE; i++) {
      innerHtml += `<div class="square" id="square_${i + 1}">${i + 1}</div>`;
    }
    container.innerHTML = innerHtml;
  }

  function highLightMultiplesOf(number) {
    document.querySelectorAll('.square')
      .forEach(s => s.classList.remove('square--highlight'));

    findMultiples(number).forEach(m => {
      document.getElementById(`square_${m}`).classList.add('square--highlight');
    });
  }

  function findMultiples(number) {
    const multiples = [];
    for (let i = number; i <= MAX_SQUARE; i += number) {
      multiples.push(i);
    }
    return multiples;
  }
})();
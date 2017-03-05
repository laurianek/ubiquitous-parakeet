(function () {
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      init();
    }
  };

  function init() {
    const container = document.getElementById('squares-container');
    const MAX_SQUARE = 144;
    const highLighter = new window.HighLighter(MAX_SQUARE);

    container.addEventListener('click', (e) => {
      const el = e.target;
      const number = Number(el.id.split('square_').join(''));
      highLighter.highLightMultiplesOf(number);
    });

    let innerHtml = '';
    for (let i = 0; i < MAX_SQUARE; i++) {
      innerHtml += `<div class="square" id="square_${i + 1}">${i + 1}</div>`;
    }
    container.innerHTML = innerHtml;
  }
})();
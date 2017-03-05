(function () {
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      init();
    }
  };

  const MAX_SQUARE = 144;
  const container = document.getElementById('squares-container');

  let innerHtml = '';
  for (let i = 0; i < MAX_SQUARE; i++) {
    innerHtml += `<div class="square" id="square_${i + 1}">${i + 1}</div>`;
  }
  container.innerHTML = innerHtml;
})();
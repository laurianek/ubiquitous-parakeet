'use strict';

(function () {
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      init();
    }
  };

  var MAX_SQUARE = 144;
  var container = document.getElementById('squares-container');

  var innerHtml = '';
  for (var i = 0; i < MAX_SQUARE; i++) {
    innerHtml += '<div class="square" id="square_' + (i + 1) + '">' + (i + 1) + '</div>';
  }
  container.innerHTML = innerHtml;
})();
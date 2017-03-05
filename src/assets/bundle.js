"use strict";

(function () {})();
'use strict';

(function () {
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      init();
    }
  };

  var MAX_SQUARE = 144;

  function init() {
    var container = document.getElementById('squares-container');

    container.addEventListener('click', function (e) {
      var el = e.target;
      var number = Number(el.id.split('square_').join(''));
      highLightMultiplesOf(number);
    });

    var innerHtml = '';
    for (var i = 0; i < MAX_SQUARE; i++) {
      innerHtml += '<div class="square" id="square_' + (i + 1) + '">' + (i + 1) + '</div>';
    }
    container.innerHTML = innerHtml;
  }

  function highLightMultiplesOf(number) {
    document.querySelectorAll('.square').forEach(function (s) {
      return s.classList.remove('square--highlight');
    });

    findMultiples(number).forEach(function (m) {
      document.getElementById('square_' + m).classList.add('square--highlight');
    });
  }

  function findMultiples(number) {
    var multiples = [];
    for (var i = number; i <= MAX_SQUARE; i += number) {
      multiples.push(i);
    }
    return multiples;
  }
})();
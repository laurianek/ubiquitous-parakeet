'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var HighLighter = function () {
    function HighLighter(MAX_SQUARE) {
      _classCallCheck(this, HighLighter);

      this.number = undefined;
      this.MAX_SQUARE = MAX_SQUARE;
    }

    _createClass(HighLighter, [{
      key: 'highLightMultiplesOf',
      value: function highLightMultiplesOf(number) {
        if (number === this.number) return;
        this.number = number;

        document.querySelectorAll('.square').forEach(function (s) {
          return s.classList.remove('square--highlight');
        });

        findMultiples.call(this, number).forEach(function (m) {
          document.getElementById('square_' + m).classList.add('square--highlight');
        });
        console && console.log('processed');
      }
    }]);

    return HighLighter;
  }();

  // private methods


  function findMultiples(number) {
    var multiples = [];
    for (var i = number; i <= this.MAX_SQUARE; i += number) {
      multiples.push(i);
    }
    return multiples;
  }

  // Export module
  if (window.module && module.exports) {
    module.exports = HighLighter;
  }
  if (window) {
    window.HighLighter = HighLighter;
  }
})();
'use strict';

(function () {
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      init();
    }
  };

  function init() {
    var container = document.getElementById('squares-container');
    var MAX_SQUARE = 144;
    var highLighter = new window.HighLighter(MAX_SQUARE);

    container.addEventListener('click', function (e) {
      var el = e.target;
      var number = Number(el.id.split('square_').join(''));
      highLighter.highLightMultiplesOf(number);
    });

    var innerHtml = '';
    for (var i = 0; i < MAX_SQUARE; i++) {
      innerHtml += '<div class="square" id="square_' + (i + 1) + '">' + (i + 1) + '</div>';
    }
    container.innerHTML = innerHtml;
  }
})();
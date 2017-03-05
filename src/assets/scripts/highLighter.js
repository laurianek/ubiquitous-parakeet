(function () {

  class HighLighter {
    constructor(MAX_SQUARE) {
      this.number = undefined;
      this.MAX_SQUARE = MAX_SQUARE;
    }

    highLightMultiplesOf(number) {
      if (number === this.number) return;
      this.number = number;

      document.querySelectorAll('.square')
        .forEach(s => s.classList.remove('square--highlight'));

      findMultiples.call(this, number).forEach(m => {
        document.getElementById(`square_${m}`).classList.add('square--highlight');
      });
      console && console.log('processed');
    }
  }

  // private methods
  function findMultiples(number) {
    const multiples = [];
    for (let i = number; i <= this.MAX_SQUARE; i += number) {
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
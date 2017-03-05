/* global describe, it, expect */
const $ = require('jquery');

describe('HighLighter', () => {
  const Highlighter = require('../scripts/highLighter');
  const MAX_NUMBER = 6;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="squares-container" id="squares-container">
        <div class="square" id="square_1">1</div>
        <div class="square" id="square_2">2</div>
        <div class="square" id="square_3">3</div>
        <div class="square" id="square_4">4</div>
        <div class="square" id="square_5">5</div>
        <div class="square" id="square_6">6</div>
      </div>
    `;
  });

  it('should initialise a hightligter object', () => {
    const highlitghter = new HighLighter(6);
    expect(highlitghter).toBeDefined();
  });

  it('should highlight all numbers if 1 is selected', () => {
    const highlitghter = new HighLighter(MAX_NUMBER);
    highlitghter.highLightMultiplesOf(1);
    expect($('.square--highlight').length).toBe(MAX_NUMBER);
  });

  it('should be able to highlight the largest number', () => {
    const highlitghter = new HighLighter(MAX_NUMBER);
    highlitghter.highLightMultiplesOf(MAX_NUMBER);
    const $highlighted_squares = $('.square--highlight');

    expect($highlighted_squares.length).toBe(1);
    expect($highlighted_squares[0].id).toBe('square_6');
  });

  it(`should be able to highlight number and it's multiples`, () => {
    const highlitghter = new HighLighter(MAX_NUMBER);
    highlitghter.highLightMultiplesOf(2);
    expect($('.square--highlight').length).toBe(3);

    highlitghter.highLightMultiplesOf(3);
    expect($('.square--highlight').length).toBe(2);
  });

});
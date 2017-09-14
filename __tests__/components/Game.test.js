const Game = require('../../src/components/Game')

describe('Game', ()=> {
  it('has stepNumber of 0', () => {
    expect(Game(undefined, {type: 'unexpected'})).toEqual({
      xIsNext: false
    });
  });
});

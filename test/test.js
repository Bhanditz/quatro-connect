import { expect } from 'chai';
import createBoard from '../src/utils/createBoard';
import { correctBoard } from './constants';

describe("Board initializer", function() {
  it('makes the initial board', function() {

    let [width, height, rows, cols] = [100, 100, 3, 3];
    const board = createBoard(width, height, rows, cols);

    expect(board).to.deep.equal(correctBoard);

  });
})

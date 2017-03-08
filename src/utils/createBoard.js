import { scaleLinear} from 'd3-scale';

const createBoard = (width, height, rows=7, cols=6) => {

  // make scales for board to svg
  const sc = {
    // add two columns as a buffer
    x: scaleLinear()
        .domain([-1, cols])
        .range([0, width]),
    // add two rows as a buffer
    y: scaleLinear()
        .domain([-1, rows])
        .range([height, 0]),
  };

  // (rows, cols) --> [ [{}..], [{}...], ... ]
  // map over number of columns
  return [...Array(cols).keys()].map(c => {
    // map over rows
    // return object for each row: {row, col, val, xCoor, yCoor}
    return [...Array(rows).keys()].map(r => ({
      col: c,
      row: r,
      val: 0,
      xCoor: sc.x(c),
      yCoor: sc.y(r),
    }));
  });
};

export default createBoard;

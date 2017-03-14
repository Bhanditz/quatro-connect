import React from 'react';

const renderRows = (props) => {
  return (r, j) => {
    const circleProps = {
      cx: r.xCoor,
      cy: r.yCoor,
      r: 10,
      key: j,
    };
    return <circle {...circleProps}/>
  };
};

const renderColumns = (props) => {
  return (c, i) => {
    return (
      <g key={i}>
        {c.map(renderRows(props))}
      </g>
    )
  };
};

const Board = (props) => {
  return (
    <g>
      {props.board.map(renderColumns(props))}
    </g>
  );
}

export default Board;

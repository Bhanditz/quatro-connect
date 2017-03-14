import React from 'react';
import Board from './Board';
import createBoard from './utils/createBoard';

const styles = {
  width: 400,
  height: 500,
}

const App = (props) => {
  return (
    <svg width={styles.width} height={styles.height}>
      <Board board={createBoard(styles.width, styles.height, 6, 7)}/>
    </svg>
  );
}

export default App;

import React from 'react';

const Child = ({ increaseCount }) => {
  return (
    <div>
      Child
      <button onClick={increaseCount}>Stop</button>
    </div>
  );
};

export default Child;

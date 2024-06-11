import React, { useEffect, useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let Interval;
    if (isRunning) {
      Interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(Interval);
  }, [isRunning]);

  const IncreaseCount = () => {
    // setCount(count + 1);
    setIsRunning(false);
  };

  return (
    <div>
      Count From child:{count}
      <div>
        <span>Child Component:</span>
        <Child increaseCount={IncreaseCount} />
      </div>
    </div>
  );
};

export default Parent;

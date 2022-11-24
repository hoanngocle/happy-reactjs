import React, { useState } from 'react';

Counter.propTypes = {

};

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(x => x + 1)}>Increase</button>
      {/* <button onClick={() => setCount(x => x - 1)}>Decrease</button> */}
    </div>
  );
}

export default Counter;
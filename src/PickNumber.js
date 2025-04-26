import { useState } from 'react';

function PickNumber() {
  const [number, setNumber] = useState(0);

  // 🎯 Derived / Computed value
  const isEven = number % 2 === 0;

  function numberChangeHandler(event) {
    setNumber(+event.target.value); // + converts string to number
  }

  return (
    <div>
      <h2>Pick a Number</h2>
      <input type="number" onChange={numberChangeHandler} value={number} />

      {/* 🎯 Use derived value */}
      <p>The number is {isEven ? 'Even' : 'Odd'}</p>
    </div>
  );
}

export default PickNumber;

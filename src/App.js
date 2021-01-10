import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  // console.log({ count });
  // console.log({ setCount });
  // console.log(typeof setCount);
  // console.log(typeof count);

  const increment = () => setCount(count + 1);

  const decriment = () => setCount(count - 1);

  const increment2 = () => setCount((previousCount) => previousCount + 1);

  const decrement2 = () => setCount((hoge) => hoge - 1);

  const reset = () => setCount(0);

  const double = () => setCount(count * 2);

  const division3 = () =>
    setCount((hoge) => {
      if (hoge % 3 === 0) {
        return hoge / 3;
      } else {
        return hoge;
      }
    });

  const division4 = () =>
    setCount((hoge) => (hoge % 4 === 0 ? hoge / 4 : hoge));

  return (
    <>
      <div>count : {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decriment}>-1</button>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>*2</button>
        <button onClick={division3}>3の倍数の時だけ3で割る</button>
        <button onClick={division4}>4の倍数の時だけ4で割る</button>
      </div>
    </>
  );
};

export default App;

import React from 'react';
import useToggle from './customHooks/useToggle';

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(true);

  return (
    <div>
      <h1 onClick={() => toggleIsHappy(!isHappy)}>Is Happy?</h1>
      {isHappy ? '😀' : '😣'}
      <h1 onClick={() => toggleIsHeartBroken(!isHeartBroken)}>
        Is Heart Broken?
      </h1>
      {isHeartBroken ? '❤️' : '💔'}
    </div>
  );
}

export default Toggler;

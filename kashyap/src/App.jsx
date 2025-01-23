import React, { useState } from 'react';
import { UserInfo, Counter, Timer } from './component';

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      {/* Mounting Component */}
      <UserInfo />

      {/* Updating Component */}
      <Counter />

      {/* Unmounting Component */}
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Stop Timer' : 'Start Timer'}
      </button>
    </div>
  );
};

export default App;

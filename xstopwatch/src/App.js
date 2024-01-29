import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react';
// function App() {
//   return (

// const Stopwatch = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const startStopwatch = () => {
//     setIsRunning(!isRunning);
//   };

//   const stopStopwatch = () => {
//     setIsRunning(false);
//   };

//   const resetStopwatch = () => {
//     setIsRunning(false);
//     setTime(0);
//   };

//   const formatTime = () => {
//     const minutes = Math.floor(time / 60).toString().padStart(2, '0');
//     const seconds = (time % 60).toString().padStart(2, '0');
//     return `${minutes}:${seconds}`;
//   };

//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <div>
//         <p>Time: {formatTime()}</p>
//       </div>
//       <div>
//         <button onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
//         <button onClick={resetStopwatch}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default Stopwatch;
import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(!isRunning);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <p>Time: {formatTime()}</p>
      </div>
      <div>
        <button onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;

import { createPath } from './pathUtils';
import { useState } from 'react';

const PATHS = {
    letters: {
      A: 'M 25,75 Q 25,25 50,25 Q 75,25 75,50 Q 75,75 50,75 Q 25,75 25,75 Z',
      B: 'M 25,25 Q 25,5 50,5 Q 75,5 75,25 Q 75,50 50,50 Q 25,50 25,75 Q 25,95 50,95 Q 75,95 75,75 Q 75,50 50,50',
      // more letters here...
    },
    numbers: {
      1: 'M 50,5 L 50,95',
      2: 'M 25,25 Q 25,5 50,5 Q 75,5 75,25 Q 75,50 50,50 Q 25,50 25,75 Q 25,95 50,95 Q 75,95 75,75',
      // more numbers here...
    },
    shapes: {
      circle: 'M 50,5 A 45,45 0 1 1 50,95 A 45,45 0 1 1 50,5',
      square: 'M 25,25 L 25,75 L 75,75 L 75,25 Z',
      // more shapes here...
    },
  };



const Tracing = () => {
    const [path, setPath] = useState('');
    const [isTracing, setIsTracing] = useState(false);
  
    function handleStart(event) {
      event.preventDefault();
      setIsTracing(true);
    }
  
    function handleMove(event) {
      event.preventDefault();
      if (isTracing) {
        const { clientX, clientY } = event.touches ? event.touches[0] : event;
        const { x, y } = event.target.getBoundingClientRect();
        const offsetX = clientX - x;
        const offsetY = clientY - y;
        const newPath = createPath(offsetX, offsetY, path);
        setPath(newPath);
      }
    }
  
    function handleEnd(event) {
      event.preventDefault();
      setIsTracing(false);
    }
  
    function handleSelectPath(pathType, pathName) {
      setPath(PATHS[pathType][pathName]);
    }
  
    return (
      <div>
        <h1>Tracing Game</h1>
        <div>
          <button onClick={() => handleSelectPath('letters', 'A')}>A</button>
          <button onClick={() => handleSelectPath('letters', 'B')}>B</button>
          {/* more buttons here */}
        </div>
        <div>
          <button onClick={() => handleSelectPath('numbers', '1')}>1</button>
          <button onClick={() => handleSelectPath('numbers', '2')}>2</button>
          {/*  more buttons here */}
        </div>
        <div>
          <button onClick={() => handleSelectPath('shapes', 'circle')}>Circle</button>
          <button onClick={() => handleSelectPath('shapes', 'square')}>Square</button>
          {/* more buttons here */}
        </div>
        </div>
)}

export default Tracing
import React, { useState, useRef, useEffect } from 'react';

const tracings = [  {    type: 'letter',    value: 'A',    image: 'apple.png',    path: 'M 50 100 Q 100 50 150 100 Q 100 150 50 100',  },  {    type: 'number',    value: '1',    image: 'one.png',    path: 'M 50 100 L 150 100',  },  {    type: 'shape',    value: 'square',    image: 'square.png',    path: 'M 50 50 L 150 50 L 150 150 L 50 150 Z',  },  // add tracing objects here
];

const TraceGame = () => {
  const canvasRef = useRef(null);
  const [tracing, setTracing] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
  }, []);

  const handleStart = (event) => {
    event.preventDefault();
    if (event.touches) {
      event = event.touches[0];
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { left, top } = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(event.clientX - left, event.clientY - top);
    setIsDrawing(true);
  };

  const handleMove = (event) => {
    event.preventDefault();
    if (!isDrawing) {
      return;
    }
    if (event.touches) {
      event = event.touches[0];
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { left, top } = canvas.getBoundingClientRect();
    ctx.lineTo(event.clientX - left, event.clientY - top);
    ctx.stroke();
  };

  const handleEnd = (event) => {
    event.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setIsDrawing(false);
    const { left, top } = canvas.getBoundingClientRect();
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = imageData.data;
    let totalPixels = 0;
    let filledPixels = 0;
    for (let i = 0; i < pixelData.length; i += 4) {
      const alpha = pixelData[i + 3];
      if (alpha > 0) {
        filledPixels++;
      }
      totalPixels++;
    }
    const percentageFilled = filledPixels / totalPixels;
    if (percentageFilled >= 0.8) {
      setMessage('Great job!');
    } else {
      setMessage('Try again!');
    }
  };

  const handleSelect = (event) => {
    const selected = event.target.value;
    const randomIndex = Math.floor(Math.random() * tracings.length);
    const randomTracing = tracings[randomIndex];
    if (selected === 'any') {
      setTracing(randomTracing);
    } else {
      const filteredTracings = tracings.filter(
        (tracing) => tracing.type === selected
      );
      if (filteredTracings.length === 0) {
        setTracing(randomTracing);
      } else {
        const randomFilteredIndex = Math.floor(
          Math.random * filteredTracings.length
          );
          const randomFilteredTracing = filteredTracings[randomFilteredIndex];
          setTracing(randomFilteredTracing);
        }
      }
      setMessage('');
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.stroke();
    };
  
    return (
      <div>
        <h1>Trace Game</h1>
        <div>
          <label htmlFor="type-select">Choose a tracing type:</label>
          <select id="type-select" onChange={handleSelect}>
            <option value="any">Any</option>
            <option value="letter">Letters</option>
            <option value="number">Numbers</option>
            <option value="shape">Shapes</option>
          </select>
        </div>
        {tracing && (
          <div>
            <h2>Trace the {tracing.type} {tracing.value}</h2>
            <img src={tracing.image} alt={`${tracing.value}`} />
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={200}
          height={200}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
        />
        <p>{message}</p>
      </div>
    );
  };
  
  export default TraceGame;

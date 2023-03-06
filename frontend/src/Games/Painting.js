import { Link } from 'react-router-dom';
import Parent from '../../../backend/models/Parent.model';
import Child from '../../../backend/models/Child.model';
import { useState } from 'react';
import './App.css';

function PaintingGame() {
  const [color, setColor] = useState('black');

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="Painting">
      <h1>Painting Game</h1>
      <div className="color-picker">
        <label htmlFor="color">Select a color:</label>
        <input type="color" id="color" value={color} onChange={handleColorChange} />
      </div>
      <div className="canvas">
        {[...Array(4000)].map((_, i) => (
          <div
            key={i}
            className="pixel"
            onMouseDown={(e) => {
              e.target.style.backgroundColor = color;
            }}
            onMouseEnter={(e) => {
              if (e.buttons === 1) {
                e.target.style.backgroundColor = color;
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PaintingGame;
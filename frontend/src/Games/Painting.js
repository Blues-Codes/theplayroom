// import { Link } from "react-router-dom";
import { useState } from "react";


function PaintingGame() {
  const [color, setColor] = useState("black");
  const [touchPosition, setTouchPosition] = useState({ x: null, y: null });

  function handleTouchStart(event) {
    setTouchPosition({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    });
  }

  function handleTouchMove(event) {
    if (!touchPosition.x || !touchPosition.y) {
      return;
    }

    const xDiff = event.touches[0].clientX - touchPosition.x;
    const yDiff = event.touches[0].clientY - touchPosition.y;

    setTouchPosition({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    });
  }

  function handleTouchEnd() {
    setTouchPosition({ x: null, y: null });
  }

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div
      className="Painting"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1>Painting Game</h1>
      <div className="color-picker">
        <label htmlFor="color">Select a color:</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={handleColorChange}
        />
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
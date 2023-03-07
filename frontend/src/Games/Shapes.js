import React, { useState } from 'react';

const shapes = [
  { type: 'circle', image: 'circle.png' },
  { type: 'square', image: 'square.png' },
  { type: 'triangle', image: 'triangle.png' },
  // add more shape objects here
];

const holes = [
  { type: 'circle', position: { x: 50, y: 50 }, size: 100 },
  { type: 'square', position: { x: 150, y: 50 }, size: 100 },
  { type: 'triangle', position: { x: 250, y: 50 }, size: 100 },
  // add more hole objects here
];

const Shapes = () => {
  const [draggingShape, setDraggingShape] = useState(null);
  const [message, setMessage] = useState('');

  const handleShapeDragStart = (event, shape) => {
    setDraggingShape(shape);
  };

  const handleShapeDragEnd = (event) => {
    setDraggingShape(null);
    const shape = event.target;
    const shapeRect = shape.getBoundingClientRect();
    const matchingHoles = holes.filter(
      (hole) =>
        hole.type === draggingShape.type &&
        hole.position.x < shapeRect.right &&
        hole.position.x + hole.size > shapeRect.left &&
        hole.position.y < shapeRect.bottom &&
        hole.position.y + hole.size > shapeRect.top
    );
    if (matchingHoles.length === 1) {
      const hole = matchingHoles[0];
      shape.style.position = 'absolute';
      shape.style.left = `${hole.position.x}px`;
      shape.style.top = `${hole.position.y}px`;
      shape.style.zIndex = '-1';
      setMessage('Great job!');
    } else {
      setMessage('Try again.');
    }
  };

  return (
    <div className="shape-box-container">
      <div className="shape-box">
        {holes.map((hole) => (
          <div
            key={hole.type}
            className={`${hole.type}-hole`}
            style={{
              left: `${hole.position.x}px`,
              top: `${hole.position.y}px`,
              width: `${hole.size}px`,
              height: `${hole.size}px`,
            }}
          />
        ))}
        {shapes.map((shape) => (
          <img
            key={shape.type}
            className={`${shape.type}-shape`}
            src={shape.image}
            alt={shape.type}
            draggable
            onDragStart={(event) => handleShapeDragStart(event, shape)}
            onDragEnd={handleShapeDragEnd}
          />
        ))}
      </div>
      <p>{message}</p>
    </div>
  );
};


export default Shapes
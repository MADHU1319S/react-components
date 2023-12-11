import React, { useRef } from 'react';

function App() {
  const circleRef = useRef(null);

  function handleClick() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    circleRef.current.style.backgroundColor = color;
  }

  return (
    <div>
     
      <div
        ref={circleRef}
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          margin: '20px auto',
        }}
        >
      </div>
      <center><button onClick={handleClick}>Generate a Circle</button></center>
    </div>
  );
}


export default App;

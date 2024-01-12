// src/pages/Home.jsx
import React from 'react';

const Home = ({ count, setCount }) => {
  return (
    <div>
      {/* Your home page content goes here */}
      <h2>Welcome to Your Portfolio</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default Home;

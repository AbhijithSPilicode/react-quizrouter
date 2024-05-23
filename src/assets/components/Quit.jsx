import React from 'react';
import { Link } from 'react-router-dom';

const Quit = () => {
  return (
    <div className="quit-page">
      <h2>Are you sure you want to quit?</h2>
      <Link to="/">
        <button>Continue Quiz</button>
      </Link>
      <Link to="/restart">
        <button>Quit</button>
      </Link>
    </div>
  );
};

export default Quit;

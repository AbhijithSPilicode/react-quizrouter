import React from 'react';
import { Link } from 'react-router-dom';

const Restart = ({ handleResetButtonClick }) => {
  return (
    <div className="restart-page">
      <h2>Your quiz has been restarted.</h2>
      <Link to="/">
        <button onClick={handleResetButtonClick}>Start Over</button>
      </Link>
    </div>
  );
};

export default Restart;

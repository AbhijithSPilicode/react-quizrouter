import React from 'react';
import { Link } from 'react-router-dom';
import questions from './questions';

const Quiz = ({ currentQuestion, score,showScore, handleAnswerButtonClick, handlePreviousButtonClick, handleNextButtonClick }) => {
  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} out of {questions.length}</h2>
          <Link to="/restart">
            <button>Restart Quiz</button>
          </Link>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}:</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].optionA)}>
              {questions[currentQuestion].optionA}
            </button>
            <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].optionB)}>
              {questions[currentQuestion].optionB}
            </button>
            <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].optionC)}>
              {questions[currentQuestion].optionC}
            </button>
            <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].optionD)}>
              {questions[currentQuestion].optionD}
            </button>
          </div>
          <div className="navigation-buttons">
            {currentQuestion > 0 && <button onClick={handlePreviousButtonClick}>Previous</button>}
            {currentQuestion < questions.length - 1 && <button onClick={handleNextButtonClick}>Next</button>}
            <Link to="/quit">
              <button>Quit</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

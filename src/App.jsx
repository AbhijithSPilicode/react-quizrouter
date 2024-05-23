import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Quiz from './assets/components/Quiz';
import Quit from './assets/components/Quit';
import Restart from './assets/components/Restart';
import questions from './assets/components/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousButtonClick = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    }
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handleResetButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Quiz 
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            score={score}
            setScore={setScore}
            showScore={showScore}
            setShowScore={setShowScore}
            handleAnswerButtonClick={handleAnswerButtonClick}
            handlePreviousButtonClick={handlePreviousButtonClick}
            handleNextButtonClick={handleNextButtonClick}
          />
        } />
        <Route path="/quit" element={<Quit />} />
        <Route path="/restart" element={<Restart handleResetButtonClick={handleResetButtonClick} />} />
      </Routes>
    </Router>
  );
}

export default App;

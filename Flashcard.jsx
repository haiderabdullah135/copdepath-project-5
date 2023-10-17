import React from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer, isCorrect }) => {
  const flippedClass = isCorrect !== null ? 'flipped' : '';

  return (
    <div className={`flashcard ${flippedClass}`}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h3>True or False?</h3>
          <p>{question}</p>
        </div>
        <div className="flashcard-back">
          <h3>Answer</h3>
          <p>{answer}</p>
          {isCorrect !== null && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? <span className="correct-text">Correct!</span> : <span className="incorrect-text">Incorrect!</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

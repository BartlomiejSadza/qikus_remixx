import React, { useState, useEffect } from "react";
import he from "he";

export default function Quiz(props) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); // Track clicked answer index
  const { question, index, setMyAnswer } = props;
  const { correct_answer, incorrect_answers } = question;

  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers(
      [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
    );
  }, [correct_answer, incorrect_answers]);

  const handleClick = (answer, answerIndex) => {
    setSelectedAnswerIndex(answerIndex);

    setMyAnswer((prev) => ({
      ...prev,
      [index]: {
        answer,
        isCorrect: answer === correct_answer,
      },
    }));
  };

  return (
    <div className="quiks">
      <p style={{ whiteSpace: "wrap" }}>{he.decode(question.question)}</p>
      <ul>
        {shuffledAnswers.map((answer, answerIndex) =>
          props.checkAnswers === true ? (
            <div
              key={answerIndex}
              className={`afterAnswer ${
                selectedAnswerIndex === answerIndex
                  ? answer === correct_answer
                    ? "answerCorrect"
                    : "answerFalse"
                  : answer === correct_answer
                  ? "answerCorrect"
                  : "answerElse"
              }`}
            >
              {he.decode(answer)}
            </div>
          ) : (
            <div
              key={answerIndex}
              onClick={() => handleClick(answer, answerIndex)}
              className={`answer ${
                selectedAnswerIndex === answerIndex ? "answerClicked" : ""
              }`}
            >
              {he.decode(answer)}
            </div>
          )
        )}
      </ul>
    </div>
  );
}

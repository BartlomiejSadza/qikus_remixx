import React, { useState, useEffect } from "react";
import he from "he";

export default function Quiz(props) {
  //array of answers
  const answers = [props.question.correct_answer];
  props.question.incorrect_answers.forEach((answer) => {
    answers.push(answer);
  });
  // randomize answers
  const randomizeAnswers = function (answers) {
    return answers.sort(() => Math.random() - 0.5);
  };
  randomizeAnswers(answers);

  return (
    <div className="quiks">
      <p>{he.decode(props.question.question)}</p>
      <ul>
        {answers.map((answer, index) => (
          <div className="answer" key={index}>
            {answer}
          </div>
        ))}
      </ul>
    </div>
  );
}

// [
//   {
//     type: 'multiple',
//     difficulty: 'medium',
//     category: 'General Knowledge',
//     question: 'Which logical fallacy means to attack the character of your opponent rather than their arguments?',
//     correct_answer: 'Ad hominem',
//     incorrect_answers: [
//       'Post hoc ergo propter hoc',
//       'Tu quoque',
//       'Argumentum ad populum'
//     ]
//   },

import React, { useState, useEffect } from "react";
import he from "he";

export default function Quiz(props) {
  const [clicked, setClicked] = useState(false);
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState(false);

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

  useEffect(() => {
    setCorrect(props.question.correct_answer);
  }, []);
  // set the button clicked or not clicked
  const handleClick = (e) => {
    setClicked(true);
  };
  console.log(correct);

  return (
    <div className="quiks">
      <p style={{ whiteSpace: "wrap" }}>{he.decode(props.question.question)}</p>
      <ul>
        {answers.map((answer, index) => (
          <div onClick={handleClick} className="answer" key={index}>
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

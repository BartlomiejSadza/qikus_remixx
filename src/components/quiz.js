import React, { useState, useEffect } from "react";
import he from "he";



export default function Quiz(props) {


  return (
    <div>
      <p>{props.question}</p>
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
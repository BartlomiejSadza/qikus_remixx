import "./App.css";
import React, { useState, useEffect } from "react";
import Quiz from "./components/quiz";

function App() {
  const [questions, setQuestions] = useState([]);
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [myAnswer, setMyAnswer] = useState({
    0: { answer: "", isCorrect: false },
    1: { answer: "", isCorrect: false },
    2: { answer: "", isCorrect: false },
    3: { answer: "", isCorrect: false },
    4: { answer: "", isCorrect: false },
  });

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9"
      );
      const data = await response.json();
      setQuestions(data.results || []); // Ensure it's an array
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [isTrue]);

  const initialState = { 
    myAnswer: {
      0: { answer: "", isCorrect: false },
      1: { answer: "", isCorrect: false },
      2: { answer: "", isCorrect: false },
      3: { answer: "", isCorrect: false },
      4: { answer: "", isCorrect: false },
    },
    checkAnswers: false,
    isTrue: false,
    questions: []
  };

  const resetGame = () => (
    setMyAnswer(initialState.myAnswer),
    setQuestions(initialState.questions),
    setIsTrue(initialState.isTrue),
    setCheckAnswers(initialState.checkAnswers)
  );

  // count the number of correct answers
  const countCorrectAnswers = Object.values(myAnswer).filter(answer => answer.isCorrect).length;

  return (
    <div className="App">
      <header className="App-header">
        <button className="checkAnswers" onClick={() => setIsTrue(!isTrue)}>Fetch content</button>
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <Quiz
            key={index}
            index={index}
            question={question}
            myAnswer={myAnswer}
            setMyAnswer={setMyAnswer}
            checkAnswers={checkAnswers}
            />
            ))
            ) : (
              <p>Loading...</p> // Display loading message if no questions are available
              )}
              {checkAnswers ? (
                <div className="afterGame">
                  <h4>You scored: {countCorrectAnswers}/5 correct answers!</h4>
                  <button onClick={() => {resetGame()}}>Play again!</button>
                </div>
              ) : (
                <button className="checkAnswers" onClick={() => setCheckAnswers(!checkAnswers)}>Check answers</button>
              )}
      </header>
    </div>
  );
}

export default App;

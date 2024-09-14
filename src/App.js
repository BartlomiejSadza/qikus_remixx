import "./App.css";
import React, { useState, useEffect } from "react";
import Quiz from "./components/quiz";

function App() {
  const [questions, setQuestions] = useState([]);
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

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsTrue(!isTrue)}>Fetch Questions</button>
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <Quiz
              key={index}
              index={index}
              question={question}
              myAnswer={myAnswer}
              setMyAnswer={setMyAnswer}
            />
          ))
        ) : (
          <p>Loading...</p> // Display loading message if no questions are available
        )}
      </header>
    </div>
  );
}

export default App;

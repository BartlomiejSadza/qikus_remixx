import "./App.css";
import React, { useState, useEffect } from "react";
import Hello from "./components/hello";
import Quiz from "./components/quiz";
import he from "he";
import { nanoid } from "nanoid";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isTrue, setIsTrue] = useState(false);

  const fetchQuestions = async function fetchData() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9"
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchQuestions().then((data) => setQuestions(data));
  }, [isTrue]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello /> */}
        <button onClick={() => setIsTrue(!isTrue)}>Fetch Questions</button>
        {questions &&
          questions.map((question, index) => (
            <Quiz key={index} question={question} />
          ))}
      </header>
    </div>
  );
}

export default App;

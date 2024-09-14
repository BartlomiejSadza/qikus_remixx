import "./App.css";
import React, { useState, useEffect } from "react";
import Hello from "./components/hello";
import Quiz from "./components/quiz";
import he from "he";

function App() {
  const [questions, setQuestions] = useState([]);

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
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello /> */}
        {questions &&
          questions.map((question, key) => (
            <Quiz key={key} question={he.decode(question.question)} />
          ))}
      </header>
    </div>
  );
}

export default App;

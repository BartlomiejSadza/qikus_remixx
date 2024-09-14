import './App.css';
import React from 'react';  
import Hello from './components/hello';
import Quiz from './components/quiz';

function App() {

  const fetchQuestions = async function fetchData() {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=5&category=9");
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      {/* <Hello /> */}
      <Quiz fetchQuestions={fetchQuestions} />
      </header>
    </div>
  );
}

export default App;

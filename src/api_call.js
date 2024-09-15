return (
  <div className="App">
    <header className="App-header">
      {isHello ? (
        <Hello fetchContent={fetchContent} hey={() => setIsHello(false)} />
      ) : !checkAnswers ? (
        <>
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
          <button
            className="checkAnswers"
            onClick={() => setCheckAnswers(true)}
          >
            Check answers
          </button>
        </>
      ) : (
        <div className="afterGame">
          <h4>You scored: {countCorrectAnswers}/5 correct answers!</h4>
          <button onClick={resetGame}>Play again!</button>
        </div>
      )}
    </header>
  </div>
);

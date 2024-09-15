import React from "react";

export default function Hello(props) {
  return (
    <div className="hello">
      <h2>Quikś remix by Bartlomiej Sadza</h2>
      <p>Wanna try check your knowledge?</p>
      <button
        onClick={() => {
          props.fetchContent();
          props.hey();
        }}
      >
        Start Quiz!
      </button>
    </div>
  );
}

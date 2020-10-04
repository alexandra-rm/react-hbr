import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  const jokeComponents = jokesData
      .filter(joke => joke.question && joke.punchLine && joke.question.length > 43)
      .map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  return (
      <div>
        {jokeComponents}
      </div>
  )
}

export default App;

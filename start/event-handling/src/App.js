import React from "react";

function handleClick() {
  console.log("I was clicked too")
}

function App() {
  return (
      <div>
        <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
        <br />
        <br />
        <button
            onClick={() => console.log("I was clicked!")}
            onDoubleClick={() => console.log("I was clicked (onDoubleClick)!")}
        >Click me</button>
        <button
            onClick={handleClick}
            onMouseMove={() => console.log("onMouseMove!")}
            onMouseOut={() => console.log("onMouseOut")}
        >Click me too</button>
      </div>
  )
}

export default App;

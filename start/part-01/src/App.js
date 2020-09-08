import React from 'react';

const Header = ({text = 'Hello world!'}) => <h1>{text}</h1>;
const Paragraph = ({text = 'This is a default paragraph'}) => <p>{text}</p>;
const List = () => <ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>;

function App() {
  return (
    <div className="App">
        <Header />
        <Paragraph />
        <Paragraph text="This is the second paragraph"/>
        <List />
    </div>
  );
}

export default App;

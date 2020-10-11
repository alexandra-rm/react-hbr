import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this)
  }

  // каждый раз, создавая метод класса (handleClick() в нашем случае),
  // в котором планируется использовать метод setState(),
  // этот метод нужно связать с this.
  // Делается это в конструкторе
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  };

  // или так: Этот вариант очень похож на вариант с .bind.
  // Здесь метод тоже прописывается в экземпляре класса, а не в прототипе.
  // handleClick = () =>{
  //   this.setState(prevState => {
  //     return {
  //       count: prevState.count + 1
  //     }
  //   })
  // };

  render() {
    return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Change!</button>
        </div>
    )
  }
}

export default App;

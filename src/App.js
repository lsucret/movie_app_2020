import React from 'react';

class App extends React.Component {
  state = {
    number : 0
  }
  add = () => {
    this.setState(current => ({number: current.number + 1}))
  }

  minus = () => {
    this.setState(current => ({number: current.number - 1}))
  }

  render() {
    return <>
      <h1>hello world! {this.state.number}</h1>
      <button onClick={this.add}>plus</button>
      <button onClick={this.minus}>minus</button>
    </>
  }
}
export default App;

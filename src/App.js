import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  componentDidMount() {
    console.log("component did rendered.");
  }
  componentDidUpdate() {
    console.log("updated.")
  }
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
      {console.log("rent")}
      <h1>hello world! {this.state.number}</h1>
      <button onClick={this.add}>plus</button>
      <button onClick={this.minus}>minus</button>
    </>
  }
}
export default App;

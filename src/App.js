import React from "react";
import names from "./names.json";

class App extends React.Component {
  state = {
    people: ["Isabella", "Sophia", "Charlotte"],
  };

  addNameUser = () => {
    const oneMoreName = names[Math.floor(Math.random() * 13)];
    const newPeople = [...this.state.people, oneMoreName];
    return this.setState({ people: newPeople });
  };

  render() {
    return (
      <div>
        <button onClick={this.addNameUser}>ADD NAME</button>
        {this.state.people.map((name, index) => {
          return <div key={index}>{name}</div>;
        })}
      </div>
    );
  }
}
export default App;

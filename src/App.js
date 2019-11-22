import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Leti", age: 30 },
      { name: "Vir", age: 28 },
      { name: "Pablo", age: 36 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Vir", age: 28 },
        { name: "Pablo", age: 34 }
      ]
    });
  };

  changeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Leti", age: 30 },
        { name: event.target.value, age: 28 },
        { name: "Pablo", age: 34 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("Leticia")}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Laetitia")}
          changed={this.changeHandler}
        >
          My hobbies: watching Gran Hermano
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;

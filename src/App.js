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
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Vir", age: 28 },
        { name: "Pablo", age: 34 }
      ]
    });
  };

  changeHandler = event => {
    this.setState({
      persons: [
        { name: "Leti", age: 30 },
        { name: event.target.value, age: 28 },
        { name: "Pablo", age: 34 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

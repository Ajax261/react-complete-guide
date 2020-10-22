import React, { Component } from "react";
import "./styles.css";
import Person from "./Person/Person";

class App extends Component {
  togglePersons = () => {
    console.log("Toggle clicked");
  };

  state = {
    persons: [
      { name: "Aman", age: "22" },
      { name: "Anisha", age: "23" }
    ],
    showPersons: false
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
    }

    return (
      <div className="App">
        <h1> Hey I am creating react App </h1>
        <button onClick={this.togglePersons}>Toggle Persons</button>
        <Person name={this.state.persons[0].name} age="22" />
        <Person name="Anisha" age="23" />
      </div>
    );
  }
}

export default App;

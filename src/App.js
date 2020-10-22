import React, { Component, useState } from "react";
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
    showPersons: true
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hey I am creating react App </h1>
        <button onClick={this.togglePersons}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

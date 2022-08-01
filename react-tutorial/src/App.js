//
import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  stage = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.stage

    this.setState({
        characters: characters.filter((character, i) => {
            return i !==index
        })
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.stage.characters, character] })
  }

  render() {
    const { characters } = this.stage;

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );

  }

}

export default App;

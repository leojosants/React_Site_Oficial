//
import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  stage = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
    //   {
    //     name: "Mac",
    //     job: "Bouncer",
    //   },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.stage

    this.setState({
        characters: characters.filter((character, i) => {
            return i !==index
        })
    })

  }

  render() {
    const { characters } = this.stage;

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    );

  }

}

export default App;

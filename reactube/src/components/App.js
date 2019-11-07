import React from "react";
import SearchBar from "./SearchBar";
import axios from 'axios';

class App extends React.Component {
  state = {term: ""};

  onSubmit = (term) => {
      
      this.setState({term: term });
     console.log(this.state.term);

     return;
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchInputComponent from './SearchInputComponent';
import ListComponent from './ListComponent';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: '',
    }
  }

  searchResults = (results) => {
    this.setState({
      searchResults: results
    });
  }

  render() {
    return (
      <div className="search-container">
        <SearchInputComponent searchResults={e => this.searchResults(e)}/>
        <ListComponent results={this.state.searchResults}/>
      </div>
    );
  }
}

export default SearchComponent;

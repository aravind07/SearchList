import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import jsonData from "./search-list.json";

class SearchInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  search = (e) => {
    let results = [];
    for(let i = 0; i < jsonData.length; i++) {
      let obj = jsonData[i];
      if(JSON.stringify(obj).includes(this.state.searchTerm)) {
        results.push(obj);
      }
    }
    this.setState({
      searchResults: results 
    }, function() {
      this.props.searchResults(this.state.searchResults);
    });
  }

  render() {
    return (
      <div className="search-input-container">
        <input name="search-input" value={this.state.searchTerm} onChange={e => this.handleChange(e)} />
        <button onClick={e => this.search(e)}>Search</button>
      </div>
    );
  }
}

export default SearchInputComponent;

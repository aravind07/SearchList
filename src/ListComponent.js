import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ListComponent extends Component {
  render() {
    let results = [];
    for(let i = 0; i < this.props.results.length; i ++) {
      results.push(
        <div className="result-each" key={i}>
          <div className="result-each-block">
            <span><b>Name</b></span> <span>{this.props.results[i].name}</span>
          </div>
          <div className="result-each-block">
            <span><b>ID</b></span> <span>{this.props.results[i]._id}</span>
          </div>
          <div className="result-each-block">
            <span><b>Gender</b></span> <span>{this.props.results[i].gender}</span>
          </div>
        </div>
      );
    }

    return (
      <div className="result-container">
        {results}
      </div>
    );
  }
}

export default ListComponent;

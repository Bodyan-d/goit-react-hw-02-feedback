import React, { Component } from 'react';
import './App.css';
//import Feedback from './components/Feedback';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  isEmpty = state => {
    const allValues = Object.values(state);

    if (allValues.some(value => value !== 0)) {
      return (
        <ul>
          <li>
            Good:<span>{this.state.good}</span>
          </li>
          <li>
            Neutral:<span>{this.state.neutral}</span>
          </li>
          <li>
            Bad:<span>{this.state.bad}</span>
          </li>
          <li>
            Total:<span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            Positive Feedback:
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </li>
        </ul>
      );
    } else {
      return <h3>No feedback given</h3>;
    }
  };

  handleClick = ({ target }) => {
    this.setState(prevState => ({
      [target.textContent.toLowerCase()]:
        prevState[target.textContent.toLowerCase()] + 1,
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>Pleas leave feedback</h2>

        <ul>
          <li>
            <button value={this.state[0]} onClick={this.handleClick}>
              Good
            </button>
          </li>
          <li>
            <button value={this.state.neutral} onClick={this.handleClick}>
              Neutral
            </button>
          </li>
          <li>
            <button value={this.state.bad} onClick={this.handleClick}>
              Bad
            </button>
          </li>
        </ul>

        <h2>Statistics</h2>
        {this.isEmpty(this.state)}
      </div>
    );
  }
}

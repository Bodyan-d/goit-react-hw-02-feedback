import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

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
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      );
    } else {
      return <Notification message="No feedback given" />;
    }
  };

  onLeaveFeedback = ({ target }) => {
    this.setState(prevState => ({
      [target.textContent.toLowerCase()]:
        prevState[target.textContent.toLowerCase()] + 1,
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>Pleas leave feedback</h2>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <h2>Statistics</h2>
        {this.isEmpty(this.state)}
      </div>
    );
  }
}

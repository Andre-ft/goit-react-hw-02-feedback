import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = stateKey =>
    this.setState(prevState => (prevState[stateKey] += 1));

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    if (sum === 0) return 0;
    return Math.round((good / sum) * 100);
  }

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    const positivFeedbackPercent = this.countPositiveFeedbackPercentage();

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>

        <Section title="Statistics">
          {positivFeedbackPercent ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbacks}
              positiveFeedback={positivFeedbackPercent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

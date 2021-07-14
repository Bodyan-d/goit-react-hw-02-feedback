import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export default function Feedback({ props }) {
  console.log(props);
  return (
    <>
      <h2>Pleas leave feedback</h2>
      <FeedbackOptions
        options={props}
        onLeaveFeedback={undefined}
      ></FeedbackOptions>
      <Statistics
        good={props.good}
        neutral={props.neutral}
        bad={props.bad}
        total={undefined}
        positivePercentage={undefined}
      ></Statistics>
    </>
  );
}

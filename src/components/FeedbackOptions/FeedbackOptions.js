import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log(options[1]);
  return (
    <>
      <ul>
        <li>
          <button>Good</button>
        </li>
        <li>
          <button>Neutral</button>
        </li>
        <li>
          <button>Bad</button>
        </li>
      </ul>
    </>
  );
}

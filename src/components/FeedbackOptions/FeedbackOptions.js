import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const keysBtns = Object.keys(options);

  function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <ul>
      <li>
        <button onClick={onLeaveFeedback}>{ucFirst(keysBtns[0])}</button>
      </li>
      <li>
        <button onClick={onLeaveFeedback}>{ucFirst(keysBtns[1])}</button>
      </li>
      <li>
        <button onClick={onLeaveFeedback}>{ucFirst(keysBtns[2])}</button>
      </li>
    </ul>
  );
}

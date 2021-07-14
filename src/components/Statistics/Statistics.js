import React from 'react';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>
        Good:<span>{good}</span>
      </li>
      <li>
        Neutral:<span>{neutral}</span>
      </li>
      <li>
        Bad:<span>{bad}</span>
      </li>
      <li>
        Total:<span>{total}</span>
      </li>
      <li>
        Positive Feedback:
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

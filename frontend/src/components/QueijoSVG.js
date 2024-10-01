import React from 'react';

const QueijoSVG = ({ color = "#ffd700" }) => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill={color} />
    <circle cx="30" cy="40" r="5" fill="#ffffff" />
    <circle cx="70" cy="40" r="5" fill="#ffffff" />
    <circle cx="50" cy="70" r="5" fill="#ffffff" />
  </svg>
);

export default QueijoSVG;
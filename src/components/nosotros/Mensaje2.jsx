import React, { useState, useEffect } from 'react';

const styles = {
  fontFamily: 'Montserrat Medium',
  maxWidth: '40ch',
  textAlign: 'center',
  transform: 'scale(0.94)',
  animation: 'scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1)',
};

const spanStyles = {
  display: 'inline-block',
  opacity: 1,
  filter: 'blur(0.9px)',
};

const words = [
  'There ',
  'are ',
  'no ',
  'limits ',
  'to ',
  'what ',
  'you ',
  'can ',
  'accomplish ',
  'except ',
  'the ',
  'limits ',
  'you ',
  'place ',
  'on ',
  'your ',
  'own ',
  'thinking. ',
];

export const Mensaje2 = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (wordIndex === 0) {
      // First word with a 16-second delay
      const firstWordTimeout = setTimeout(() => {
        setWordIndex(1);
      }, 17000);
      return () => clearTimeout(firstWordTimeout);
    } else if (wordIndex < words.length) {
      // Subsequent words with a 1-second delay
      const timeout = setTimeout(() => {
        setWordIndex(wordIndex + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [wordIndex]);

  return (
    <h1 style={styles}>
      {words.slice(0, wordIndex).map((word, index) => (
        <span key={index} style={{ ...spanStyles }}>
          <pre>{word}</pre>
        </span>
      ))}
    </h1>
  );
};

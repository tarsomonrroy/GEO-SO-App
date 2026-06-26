import React from 'react';
import { useTheme } from './ThemeContext';

const AltoContraste = () => {
  const { highContrast, toggleContrast } = useTheme();

  const buttonStyle = {
    backgroundColor: highContrast ? '#000000' : '#FFFFFF',
    color: highContrast ? 'white' : 'black',
    border: 'none',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    position: 'fixed',
    top: '150px',
    right: '10px',
    borderRadius: '5px',
    zIndex: 1000,
  };

  return (
    <button style={buttonStyle} onClick={toggleContrast}>
      {highContrast ? 'D' : 'L'}
    </button>
  );
};

export default AltoContraste;

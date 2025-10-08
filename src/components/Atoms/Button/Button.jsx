import React from 'react';

const buttonStyles = {
  padding: '8px 16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
  color: '#333',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  outline: 'none',
};

export const Button = ({ children, onClick, style, ...props }) => {
  return (
    <button
      onClick={onClick}
      style={{ ...buttonStyles, ...style }}
      {...props}
    >
      {children}
    </button>
  );
};
import React from 'react'

const GradientBlob = ({ className = "", delay = 0 }) => {
  return (
    <div
      className={`gradient-blob ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

export default GradientBlob;
export {GradientBlob};
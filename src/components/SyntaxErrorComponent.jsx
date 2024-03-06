// SyntaxErrorComponent.js
import React from 'react';

const SyntaxErrorComponent = () => {
  return (
    <div>
      {/* This will cause a syntax error */}
      <h1>This component contains a syntax error</h1>
      <p>Another JSX element to demonstrate the error</p>
    </div>
  );
};

export default SyntaxErrorComponent;

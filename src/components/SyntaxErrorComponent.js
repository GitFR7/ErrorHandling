import React from 'react';

const SyntaxErrorComponent = () => {
  return (
    <div>
      {/* This will cause a syntax error */}
      <h1>This component contains a syntax error</h1>
    </div>
  );
};

export default SyntaxErrorComponent;
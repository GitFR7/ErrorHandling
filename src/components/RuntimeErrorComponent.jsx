import React from 'react';

const RuntimeErrorComponent = () => {
  const throwError = () => {
    throw new Error('This is a runtime error!');
  };

  return (
    <div>
      <button onClick={throwError}>Click to throw error</button>
    </div>
  );
};

export default RuntimeErrorComponent;
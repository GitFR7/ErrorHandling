import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import SyntaxErrorComponent from './SyntaxErrorComponent';
import RuntimeErrorComponent from './RuntimeErrorComponent';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <SyntaxErrorComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <RuntimeErrorComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;

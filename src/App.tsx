import React from 'react';
import Home from './screens/home';
import ErrorBoundary from './components/error-boundary';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <>
          <Home />
        </>
      </ErrorBoundary>
    );
  }
}

export default App;

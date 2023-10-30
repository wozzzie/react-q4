import React from 'react';

import './index.css';

const Loader: React.FC = () => {
  return (
    <div className="loader__block" data-testid="loader">
      <div className="loader__text">Loading...</div>
      <div className="loader">
        <span className="loader__spinner" />
      </div>
    </div>
  );
};

export default Loader;

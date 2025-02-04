import React from 'react';

const CenteredContainer = ({ children }) => {
  return (
    <div className="w-full px-4 lg:w-2/3 mx-auto">
      {children}
    </div>
  );
};

export default CenteredContainer;

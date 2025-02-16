import React from 'react';

const CenteredContainer = ({ children }) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto p-4">
      {children}
    </div>
  );
};

export default CenteredContainer;

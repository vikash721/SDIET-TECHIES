import React from 'react';

const CenteredContainer = ({ children }) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto">
      {children}
    </div>
  );
};

export default CenteredContainer;

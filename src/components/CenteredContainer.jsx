import React from 'react';

const CenteredContainer = ({ children }) => {
  return (
    <div className="w-full px-4 lg:w-full xl:w-7/10 2xl:w-2/3 mx-auto">
      {children}
    </div>
  );
};

export default CenteredContainer;

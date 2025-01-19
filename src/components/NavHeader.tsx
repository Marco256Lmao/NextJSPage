import React from 'react';

const NavHeader = () => {
  return (
    <div className="ml-72 h-20 pl-72 relative">
      <h1 className="text-3xl font-bold text-black absolute left-8 top-1/2 transform -translate-y-1/2">
        My Products
      </h1>



      <div className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-slate-200" />
    </div>
  );
};

export default NavHeader;

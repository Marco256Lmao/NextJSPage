import React from 'react';
import MenuButton from './MenuButton';
import ProfileCard from './ProfileCard';
import AlertButton from './AlertButton';
import { mockedProducts } from 'data/MockedData';
import { useRouter } from 'next/router';
import { useTheme, useMediaQuery } from '@mui/material';

const NavHeader = () => {
  const router = useRouter();
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const navTitle = () => {
    const { id } = router.query;
    const product = mockedProducts.find((item) => item.id === Number(id));

    if (!product) {
      return 'My Products';
    }
    return product.name;
  };

  return (
    <div className="md:ml-72 h-20 relative flex items-center">
      <h1 className="text-3xl font-bold text-black absolute left-8 top-1/2 transform -translate-y-1/2">
        {navTitle()}
      </h1>

      <div className="absolute right-0 flex flex-row items-center">
        <div className={`relative ${isSmUp ? 'right-24' : 'right-16'}`}>
          <AlertButton />
        </div>
        {isSmUp && (
          <div className="relative right-16">
            <ProfileCard />
          </div>
        )}
        <div className="relative right-8">
          <MenuButton />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-slate-200" />
    </div>
  );
};

export default NavHeader;

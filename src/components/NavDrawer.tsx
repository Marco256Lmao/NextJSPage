import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { Assessment, Logout, ShoppingCart } from '@mui/icons-material';
import { useRouter } from 'next/router';

import { ReactNode } from 'react';

interface NavDrawerProps {
  children: ReactNode;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: 'w-72 bg-blue-100 text-black flex flex-col items-center' }}
      >
        <div className="h-18 w-full flex items-center justify-center">
          <div className="rounded-[20px] h-14 bg-orange-300 mt-4 w-56 flex items-center justify-center shadow-md">
            <span className="text-white font-bold">Logo Container</span>
          </div>
        </div>
        <text className=" mt-4 pt-4 mr-10">Menu</text>
        <List className="w-2/3">
          <ListItemButton className={`rounded-[10px] mb-2 justify-start" ${isHomePage ? 'bg-blue-200' : ''}`}>
            <ListItemIcon>
              <Assessment className='text-orange-300' />
            </ListItemIcon>
            <text className="text-left text-sm">Products</text>
          </ListItemButton>
          <ListItemButton className="rounded-[10px] mt-2">
            <ListItemIcon>
              <ShoppingCart className='text-orange-300' />
            </ListItemIcon>
            <text className="text-left text-sm">My categories</text>
          </ListItemButton>
        </List>
        <ListItemButton className=" absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-[10px] mb-2 w-2/3">
          <ListItemIcon>
            <Logout className='text-orange-300' />
          </ListItemIcon>
          <text className="text-left text-sm">Logout</text>
        </ListItemButton>
      </Drawer>
      <main className="flex-grow">
        {children}
      </main>
    </Box>
  );
}

export default NavDrawer;

import React from 'react';

import { IconButton } from '@mui/material';
import { NotificationsNone } from '@mui/icons-material';

const AlertButton = () => {
  return (
    <IconButton edge="start" color="inherit" aria-label="menu">
      <NotificationsNone className='text-blue-300' />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-orange-300 rounded-full border-2 border-white"></div>
    </IconButton>
  );
}

export default AlertButton;

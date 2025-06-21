import type { FC } from 'react';

import { Add as AddIcon, Home as HomeIcon } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { NavLink } from 'react-router';
import { APP_ROUTES } from '../constants/router';

const navLinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
};

export const DrawerContent: FC = () => (
  <div>
    <Toolbar />
    <List>
      <NavLink to={APP_ROUTES.HOME} style={navLinkStyle} end>
        {({ isActive }) => (
          <ListItem disablePadding>
            <ListItemButton selected={isActive}>
              <ListItemIcon>
                <HomeIcon color={isActive ? 'primary' : 'inherit'} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        )}
      </NavLink>
      <NavLink to={APP_ROUTES.ADD_BOOK} style={navLinkStyle}>
        {({ isActive }) => (
          <ListItem disablePadding>
            <ListItemButton selected={isActive}>
              <ListItemIcon>
                <AddIcon color={isActive ? 'primary' : 'inherit'} />
              </ListItemIcon>
              <ListItemText primary="Add Book" />
            </ListItemButton>
          </ListItem>
        )}
      </NavLink>
    </List>
  </div>
);

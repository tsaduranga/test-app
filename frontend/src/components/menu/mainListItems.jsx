import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Item from './Item';

export const mainListItems = (
  <React.Fragment>
    <Item name="Dashboard" url="dashboard" icon={<DashboardIcon />} />
    <Item name="Orders" url="orders" icon={<AddShoppingCartIcon />} />
    <Item name="Account" url="account" icon={<PersonIcon />} />
    <Item name="Settings" url="settings" icon={<SettingsIcon />} />
  </React.Fragment>
);

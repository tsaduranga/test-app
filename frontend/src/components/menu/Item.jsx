import React from 'react'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ name, url , icon}) => {
  return (
    <ListItemButton component={Link} to={url}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  )
}

export default Item
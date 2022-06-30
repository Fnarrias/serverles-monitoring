import { Box, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Sidebar = ()=>{
    return(
        <List sx={{ display:{xs: "none", sm:"block"} }}>
        <ListItemButton>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" secondary="Return where you belong" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
          <ListItemText primary="Add Site" secondary="Are you sure?" />
        </ListItemButton>
      </List>
    )
}

export default Sidebar;
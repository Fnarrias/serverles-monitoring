import { AppBar, Toolbar, Typography } from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Navbar = (props)=>{
    return(
        <AppBar position="sticky">
            <Toolbar justifyContent="space-between" display= "flex">
                <BarChartIcon flex={1}/>
                <Typography p={2} flex={1}>Monitoring CLM - {props.datos}</Typography>
                <AddCircleOutlineIcon flex={1} sx={{ display:{xs: "block", sm: "none"}}}/>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
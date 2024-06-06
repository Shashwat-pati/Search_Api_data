import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Search Zone
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

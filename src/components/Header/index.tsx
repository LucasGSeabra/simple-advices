import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h1" color="white" noWrap>
          Advices
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

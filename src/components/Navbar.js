import React, { Component } from "react";
import Link from "react-router-dom/Link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar classname="nav-container">
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
          <Button color="inherit" component={Link} to="/courses">
            Courses
          </Button>
          <Button color="inherit" component={Link} to="/statistic">
            Statistic
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Link } from "@material-ui/core";
import {
  withStyles,
  fade,
  InputBase,
  SearchIcon
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import SvgIcon from "@material-ui/core/SvgIcon";
import Grid from "@material-ui/core/Grid";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import emaillogo from "../email.png";
import githublogo from "../Octocat.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    // this.homeClick = this.homeClick.bind(this);
  }
  render() {
    const { classes } = this.props;
    return (
      <BottomNavigation
        style={{
          backgroundColor: "transparent"
        }}
      >
        <a href="https://github.com/nabilspann/my-website">
          <BottomNavigationAction
            icon={
              <img
                src={githublogo}
                alt="Logo"
                style={{ width: "40px", height: "35px" }}
              />
            }
          />
        </a>
        <a href="mailto:nabilspann@gmail.com">
          <BottomNavigationAction
            icon={
              <img
                src={emaillogo}
                alt="Logo"
                style={{ width: "35px", height: "35px" }}
              />
            }
          />
        </a>
      </BottomNavigation>
    );
  }
}

export default Footer;

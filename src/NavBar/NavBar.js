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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const styles = theme => ({
  search: {
    // position: "relative",
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // "&:hover": {
    //   backgroundColor: fade(theme.palette.common.white, 0.25)
    // },
    // marginLeft: 0,
    // width: "100%"
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing.unit,
    //   width: "auto"
    // }
  },
  searchIcon: {
    // width: theme.spacing.unit * 9,
    // height: "100%"
    // position: "absolute",
    // pointerEvents: "none",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.homeClick = this.homeClick.bind(this);
  }
  homeClick(e) {
    e.preventDefault();
    this.props.history.push("/");
  }
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={"main-bar"}>
        <Grid container spacing={50}>
          <Grid item xs={1.25}>
            <NavLink to="/">
              <Toolbar>
                <HomeIcon style={{ marginRight: "5px" }} fontSize="large" />
                <div className="menutext">Home</div>
              </Toolbar>
            </NavLink>
          </Grid>
          <Grid item xs={1.25}>
            <NavLink to="/chesspuzzle">
              <Toolbar>
                <FontAwesomeIcon
                  style={{ fontSize: "27px", marginRight: "5px" }}
                  icon="chess"
                />
                <div className="menutext">Chess Board</div>
              </Toolbar>
            </NavLink>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}
export default NavBar;

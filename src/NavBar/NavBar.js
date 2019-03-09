import React from "react";
import { AppBar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AppBar className={"main-bar"}>Nabil's Homepage!</AppBar>;
  }
}
export default NavBar;

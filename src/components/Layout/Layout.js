import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = React.useState(false);
  const SideDrawerClosedHandler = () => [setShowSideDrawer(false)];
  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prevState => {
      return !prevState.showSideDrawer;
    });
  };
  return (
    <Aux>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={SideDrawerClosedHandler} />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;

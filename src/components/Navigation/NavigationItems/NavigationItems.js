import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="#test" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="#test">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;

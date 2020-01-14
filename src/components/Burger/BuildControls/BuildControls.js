import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      <b>Current price : {props.price.toFixed(2)}</b>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        added={() => props.ingredientsAdded(ctrl.type)}
        removed={() => props.ingredientsRemoved(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <button
      disabled={!props.purchasable}
      className={classes.OrderButton}
      onClick={() => props.ordered()}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;

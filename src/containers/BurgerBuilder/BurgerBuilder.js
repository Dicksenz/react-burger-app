import React from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
const BurgerBuilder = props => {
  const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
  };
  const [ingredients, setIngredients] = React.useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  const [totalPrice, setTotalPrice] = React.useState(4);
  const [purchasable, setPurchasable] = React.useState(false);
  const [purchasing, setPurchasing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const updatePurchaseState = ing => {
    const newIngredients = { ...ing };
    const sum = Object.keys(newIngredients)
      .map(igKey => {
        return newIngredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPurchasable(sum > 0);
  };

  const addIngredientHandler = type => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;
    setIngredients(updatedIngredients);
    setTotalPrice(newPrice);
    updatePurchaseState(updatedIngredients);
  };
  const removeIngredientHandler = type => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDeduction;
    setIngredients(updatedIngredients);
    setTotalPrice(newPrice);
    updatePurchaseState(updatedIngredients);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };
  const purchaseContinueHandler = () => {
    setLoading(true);
    const order = {
      ingredients: ingredients,
      price: totalPrice,
      customer: {
        name: "Dicksen",
        address: {
          street: "Test street 1",
          zipCode: "41351",
          country: "Mauritius"
        },
        email: "test@email.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        setLoading(false);
        setPurchasing(false);
      })
      .catch(error => {
        setLoading(false);
        setPurchasing(false);
      });
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = (
    <OrderSummary
      purchaseCancelled={purchaseCancelHandler}
      purchaseContinued={purchaseContinueHandler}
      ingredients={ingredients}
      price={totalPrice}
    />
  );

  if (loading) {
    orderSummary = <Spinner />;
  }
  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientsRemoved={removeIngredientHandler}
        ingredientsAdded={addIngredientHandler}
        disabled={disabledInfo}
        price={totalPrice}
        ordered={purchaseHandler}
        purchasable={purchasable}
      />
    </Aux>
  );
};

export default BurgerBuilder;

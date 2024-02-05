export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //calculate items price
  state.itemPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //calculate shipping price (if order is over $100 then free, else $10 shipping)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // calculate tex price (15% tax)
  state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)));

  //calculate total price
  state.totalPrice =
    Number(state.itemPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};

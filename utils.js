// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h;
}

const perimeter = (w, h) => {
  return((2 * w) + (2 * h));
}

const circleArea = r => {
  return Math.PI * r * r;
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  return shoppingCart.length;
}

const removeItemFromCart = (item) => {
  shoppingCart.splice(shoppingCart.indexOf(item), 1)
}

const updateItemCount = (item, n) => {
  item.quantity = n
}

const validateEmptyCart = () => {
  if (shoppingCart.length === 0) {
    return "This cart has 0 items"
  }
  return "This cart has items"
}

const totalCost = () => {
  let total = 0;
  for (let item of shoppingCart) {
    total += item.price * item.quantity;
  }
  return total;
};

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, updateItemCount, validateEmptyCart, totalCost
}

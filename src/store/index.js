// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    // Holds the list of products
    products: [
        { 
            id: 1, 
            name: 'Laptop', 
            price: 1, 
            image: require('../assets/hhp.jpg'), 
            description: 'A high-performance laptop for all your needs.'
          },
          { 
            id: 2, 
            name: 'Phone', 
            price: 500, 
            image: require('../assets/Samsung.jpg'), 
            description: 'A smartphone with the latest features.'
          },
          { 
            id: 3, 
            name: 'Tablet', 
            price: 300, 
            image: require('../assets/Tablets3.jpg'), 
            description: 'A versatile tablet for work and play.'
          },
    ],
    // Cart to hold items added by the user
    cart: [],
  },
  mutations: {
    // Adds an item to the cart
    addToCart(state, product) {
      const item = state.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    // Removes an item from the cart
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
  },
  getters: {
    // Retrieves total count of items in the cart
    cartItemCount(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    // Retrieves the cart's total price
    cartTotalPrice(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});

export default store;
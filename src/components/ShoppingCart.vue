<!-- src/components/ShoppingCart.vue -->
<template>
    <div>
      <h2>Shopping Cart</h2>
      <p v-if="cart.length === 0">Cart is empty</p>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total Items: {{ cartItemCount }}</p>
      <p>Total Price: ${{ cartTotalPrice }}</p>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['cart']),
      ...mapGetters(['cartItemCount', 'cartTotalPrice']),
    },
    methods: {
      ...mapMutations(['removeFromCart']),
    },
  };
  </script>
  
  /* src/components/ShoppingCart.vue */
<style scoped>
/* Container styling */
div {
  background-color: #f4f7f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  margin: auto;
}

/* Header styling */
h2 {
  color: #333;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
}

/* Empty cart message */
p {
  font-size: 1.2rem;
  color: #777;
  text-align: center;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* List items */
li {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.3s ease;
}

li:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Button styling */
button {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff5252;
}

button:active {
  transform: scale(0.95);
}

/* Total items and price */
p:nth-last-of-type(2),
p:last-of-type {
  font-weight: bold;
  color: #333;
  font-size: 1.1rem;
  text-align: center;
  margin: 15px;
}
</style>

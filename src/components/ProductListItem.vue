<!-- src/components/ProductListItem.vue -->
<template>
<div class="to">
    <div>
        <h3>{{ product.name }}</h3>
        <img :src="product.image" :alt="product.name" style="width: 100px; height: auto;" />
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <button @click="addToCartToStore">Add to Cart</button>
      </div>
</div>
  </template>
  
  <script>
  import { mapMutations } from 'vuex';
  
  export default {
    props: {
      product: Object,
    },
    methods: {
      ...mapMutations(['addToCart']),
      addToCartToStore() {
        this.addToCart(this.product); // Calls the Vuex mutation
      },
    },
  };
  </script>

/* src/components/ProductListItem.vue */
<style scoped>
/* Container styling */
.to{
    display: flex;
}
div {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 250px;
  margin: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

div:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Title styling */
h3 {
  color: #333;
  font-size: 1.4rem;
  margin: 10px 0;
}

/* Image styling */
img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 10px;
}

/* Description and Price styling */
p {
  color: #666;
  font-size: 1rem;
  margin: 8px 0;
}

p:nth-of-type(2) {
  font-weight: bold;
  color: #333;
}

/* Button styling */
button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff5252;
}

button:active {
  transform: scale(0.95);
}
</style>

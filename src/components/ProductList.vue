<!-- src/components/ProductList.vue -->
<template>
<div class="w">
    <h2>Products</h2>
    <div class="to">
        <ProductListItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import ProductListItem from './ProductListItem.vue';
  
  export default {
    components: { ProductListItem },
    computed: {
      ...mapState(['products']),
    },
  };
  </script>
  <style scoped>
  .w{
    text-align: center;
  }
    .to{
        display: flex;
    }
  </style>
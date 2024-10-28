<template>
  <div id="app">
    <ProductList />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  components: {
    ProductList,
    ShoppingCart,
  },
};
</script>
<style scoped>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#app {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease-in-out;
}

.component {
  padding: 20px;
  background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.component:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  #app {
    padding: 15px;
  }

  .component {
    padding: 15px;
  }
}
</style>
<template>
    <nav>

      <router-link to="/">Home</router-link> 
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/checkout">Checkout</router-link>
     
    </nav>
  </template>
  
  <script>
  export default {
    name: 'TopNavigation',
  };
  </script>
  
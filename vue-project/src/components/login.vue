<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <br><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <br><br><br>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name:'login',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        localStorage.setItem('token', response.data.token);
        this.username = '';
        this.password = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add some styling if needed */
  </style>
  
<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <br><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <br><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <br><br>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name:'register',
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        // Perform registration logic here
        // For simplicity, let's just log the entered data
        console.log('Username:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
  
        // Reset the form after processing
        this.username = '';
        this.email = '';
        this.password = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add some styling if needed */
  </style>
  
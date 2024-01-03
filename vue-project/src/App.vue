<template>

<router-link to="/"> Home</router-link><br>
<router-link to="/login">login</router-link><br>
<router-link to="/profile">profile</router-link> <br>
<router-link to="/register">Register</router-link> 
<router-view></router-view>
<!-- <Home/> -->
</template>

<script>


export default {
  name:'App'
}
</script>

<style>

</style>
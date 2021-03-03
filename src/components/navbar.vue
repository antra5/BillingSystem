<template>
<div class="topnav">
  <router-link to="/login"><span class="active">Login</span></router-link>
  <router-link to="/register"> <span >Register</span> </router-link>
  <router-link to="/"> <span >Home</span> </router-link>
</div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>

topnav {
  width: 100%;
  overflow: hidden;
  background-color: #333;
}

.topnav span {
  float: right;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  cursor: pointer;
}

.topnav span:hover {
  background-color: #ddd;
  color: black;
}

.topnav span.active {
  background-color: #4CAF50;
  color: white;
}
</style>

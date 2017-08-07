<template>
  <div id="app">

    <div class="header">

      <h1>Sereina Charise Photography</h1>

      <div id="navbar-container">
        <ul class="navbar-list">
          <li class="navbar-item"><router-link to="/">Home</router-link></li>
          <li class="navbar-item"><router-link to="/albums">Albums</router-link></li>
          <li class="navbar-item"><router-link to="/about">About</router-link></li>
          <li class="navbar-item"><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>


    </div>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Work+Sans:300');
#navbar-container {
  display: inline-block;
  margin: 0 auto;
}

/* HEADER */

h1 {
  display: inline-block;
  margin: 10px 0px 0px 15px;
  padding-top: 10px;
  width: 40%;
  max-width: 500px;
  font-size: 30px;
  Font-Family: 'Work Sans', Sans-Serif;
}

.navbar-container {
  display: inline-block;
  width: 40%;
}

.navbar-list {
  width: 600px;
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar-item {
  display: inline-block;
  margin: 0px 20px 0px 20px;
}

/* DEFAULTS */
a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: grey;
  text-decoration: none;
}

* {
  Font-Family: 'Open Sans', Sans-Serif;
  Font-Size: 15px;
}

h2, h3, h4, h6 {
  Font-Family: 'Work Sans', Sans-Serif;
  Font-Size: 45px;
}
</style>

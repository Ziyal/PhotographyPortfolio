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
        <div class="social-icons">
          <a href="#"><img src="./assets/social_media/facebook.png" class="icon"></a>
          <a href="#"><img src="./assets/social_media/instagram.png" class="icon"></a>
          <a href="#"><img src="./assets/social_media/twitter.png" class="icon"></a>
        </div>
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
  margin: 10px 0px 15px 15px;
  // padding-top: 10px;
  // font-size: 30px;
  width: 50%;
  max-width: 500px;
  Font-Family: 'Work Sans', Sans-Serif;
}

.navbar-container {
  display: inline-block;
  align: right;
  width: 600px;
  width: 50%;
}

.navbar-list {
  display: inline-block;
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar-item {
  display: inline-block;
  margin: 0px 20px 0px 20px;
}

.social-icons {
  display: inline-block;
  // width: 200px;
  margin-top: 3px;
}

.icon {
  width: 18px;
  margin: 0px 5px 0px 5px;
}

/* DEFAULTS */
\
a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: grey;
  text-decoration: none;
}

@media (max-width: 4000px) {
  h1 {
    font-size: 30px;
  }
}

@media (max-width: 1000px) {
  h1 {
    font-size: 25px;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 25px;
  }
}

@media (max-width: 550px) {
  h1 {
    font-size: 16px;
  }
}

* {
  Font-Family: 'Open Sans', Sans-Serif;
  Font-Size: 15px;
}

body {
  margin: 0px;
  padding: 0px;
}

h2, h3, h4, h6 {
  Font-Family: 'Work Sans', Sans-Serif;
  Font-Size: 45px;
}
</style>


li {
  list-style-type: none;
  display: inline-block;
  // flex-direction: column;
  background-color: black;
  max-height: 300px;
  margin: 0px;
}

.category {
  z-index:100;
  // display: none;
  position: absolute;
  // width: 300px;
  text-align: center;
  font-size: 50px;
  color: white;
}

h5 {
  text-align: center;
  Font-Family: 'Work Sans', Sans-Serif;
  Font-Size: 45px;
}

img {
  max-width: 300px;
  // background-color: black;
  opacity: 0.9;
  transition: 0.3s linear;
   -webkit-transition: 0.3s linear;
   -moz-transition: 0.3s linear;
}

img:hover {
  opacity: 1;
}
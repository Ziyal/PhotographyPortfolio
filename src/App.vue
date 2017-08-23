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
          <a href="#" target="_blank"><img src="./assets/social_media/facebook.png" class="icon"></a>
          <a href="http://instagram.com/sereinainanutshell" target="_blank"><img src="./assets/social_media/instagram.png" class="icon"></a>
          <a href="https://twitter.com/sereinanutshell" target="_blank"><img src="./assets/social_media/twitter.png" class="icon"></a>
        </div>
      </div>
    </div>

    <router-view></router-view>

    <div id="footer">
      <p class="footer-text">Copyright &copy; {{currYear}} Sereina Blanchard.</p>
    </div>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Work+Sans:300');



/************* HEADER *************/
.header {
  background-color: white;
  position: fixed;
  top: 0px;
  z-index: 10001;
  width: 100%;
  display: flex;
  display: -webkit-flex;
}

h1 {
  display: inline-block;
  margin: 10px 0px 15px 15px;
  // padding-top: 10px;
  // font-size: 30px;
  width: 50%;
  max-width: 430px;
  Font-Family: 'Work Sans', Sans-Serif;
}

#navbar-container {
  display: inline-block;
  margin: 0 auto;
  text-align: right;
  padding-top: 14px;
  flex: 1;
  margin-right: 15px;
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
/************* End Header *************/

/************* Footer *************/
#footer {
  height: 45px;
  background-color: #ededed;
  margin: 0;
  text-align: center;
  border-top: solid #dbdbdb 1px;
}

.footer-text {
  margin: 0;
  padding-top: 12px;
  font-size: 12px;
  color: #7c7c7c;

}
/************* End Footer *************/

/*/************* Defaults *************/
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

@media (max-width: 750px) {
  h1 {
    font-size: 20px;
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

</style>
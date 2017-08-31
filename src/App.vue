<template>
  <div id="app">

    <!-- Header and Navbar -->
    <div class="header-container">
      <h1 class="site-title">Sereina Charise Photography</h1>

      <!-- Links and social media icons -->
      <div id="nav-container" class="navbar">
        <!-- Links -->
        <a class="navbar-item top-link"><router-link to="/">Home</router-link></a>
        <a class="navbar-item"><router-link to="/albums">Albums</router-link></a>
        <a class="navbar-item"><router-link to="/about">About</router-link></a>
        <a class="navbar-item"><router-link to="/contact">Contact</router-link></a>

        <!-- Social media links -->
        <a href="#" target="_blank" class="icon-link"><img src="./assets/social_media/facebook.png" class="icon"></a>
        <a href="http://instagram.com/sereinainanutshell" target="_blank" class="icon-link"><img src="./assets/social_media/instagram.png" class="icon"></a>
        <a href="https://twitter.com/sereinanutshell" target="_blank" class="icon-link"><img src="./assets/social_media/twitter.png" class="icon"></a>
        
        <!-- Hamburger Button -->
        <a class="hamburger" v-on:click="makeResponsive">&#9776;</a>
      </div>
    </div>

    <!-- Body Content from Components -->
    <router-view></router-view>

    <!-- footer -->
    <div id="footer-container">
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
  },
  methods: {
    // Changes navbar from regular to hamburger button
    makeResponsive: function() {
      let navbar = document.getElementById("nav-container");
      if(navbar.className === "navbar") {
        navbar.className += " responsive";
      } else {
        navbar.className = "navbar";
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Work+Sans:300');

/* ---------- Defaults ---------- */
* {
  Font-Family: 'Open Sans', Sans-Serif;
  Font-Size: 15px;
}

body {
  margin: 0px;
  padding: 0px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: grey;
  text-decoration: none;
}

/************* header-container *************/
.header-container {
  background-color: white;
  position: fixed;
  top: 0px;
  z-index: 10001;
  width: 100%;
  display: flex;
  display: -webkit-flex;
}

.site-title {
  display: inline-block;
  margin: 10px 0px 15px 15px;
  width: 50%;
  max-width: 430px;
  font-size: 30px;
  Font-Family: 'Work Sans', Sans-Serif;
}

.header-container #nav-container {
  display: inline-block;
  margin: 0 auto;
  text-align: right;
  padding-top: 14px;
  flex: 1;
  margin-right: 15px;
}

/* -- Nav Links -- */
.navbar-item {
  display: inline-block;
  margin: 0px 20px 0px 20px;
}

.icon {
  width: 18px;
  margin: 0px 5px 0px 5px;
}

/* ---------- Footer ---------- */
#footer-container {
  height: 45px;
  background-color: #ededed;
  margin: 0;
  text-align: center;
  border-top: solid #dbdbdb 1px;
  position: absolute;
  width: 100%;
}

.footer-text {
  margin: 0;
  padding-top: 12px;
  font-size: 12px;
  color: #7c7c7c;
}

/* ---------- Resposive Navbar ---------- */
.navbar {
  overflow: hidden;
}

/* Hide hamburger button in normal view */
.navbar .hamburger {
  display: none;
}

@media screen and (max-width: 900px) {
  .navbar a { display: none; }
  .navbar .icon-link { display: none; }
  .navbar a.hamburger {
    display: block;
    float: right;
  }

  .responsive { 
    position: relative; 
    padding-right: 0px;
  }
  
  .responsive .hamburger {
    position: absolute;
    right: 0;
    top: 0;
  }

  .responsive a {
    float: none;
    display: block;
    text-align: right;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-right: 0;
    margin-right: 0px;
    font-size: 20px;
  }

  .responsive .navbar-item {
    margin-right: 50px;
  }

  .responsive .top-link {
    margin-top: -15px;
  }

  /* -- Social Media Icons -- */
  .responsive .icon-link {
    float: none;
    display: inline-block;
    font-size: 20px;  
    margin: 0px -10px 10px 0px;
    margin-right: 0px;
  }

  .responsive .icon {
    margin: 10px 15px 0px 10px;
    width: 30px;
  }
}

@media screen and (max-width: 820px) {
    .site-title {
    font-size: 20px;
  }
}

</style>
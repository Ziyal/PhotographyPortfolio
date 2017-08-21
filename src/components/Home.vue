<template>
  <div class="home">

    <img src='../assets/images/header_2.jpg' alt="Portrait" class="large-img">

    <div class="photos">
      <ul>
        <li>
          <router-link to="/nature">
            <img src="../assets/images/nature.jpg">
            <h5 class="category">Nature</h5>
          </router-link>
        </li>

        <li>
          <router-link to="/lifestyle">
            <img src="../assets/images/lifestyle.jpg">
            <h5 class="category">Lifestyle</h5>
          </router-link>
        </li>

        <li>
          <router-link to="/events">
            <img src="../assets/images/event.jpg">
            <h5 class="category">Events</h5>
          </router-link>
        </li>

        <li>
          <router-link to="/headshots">
            <img src="../assets/images/headshot.jpg">
            <h5 class="category">Headshots</h5>
          </router-link>
        </li>

        <li>
          <router-link to="/family">
            <img src="../assets/images/family.jpg">
            <h5 class="category">Family</h5>
          </router-link>
        </li>

        <li>
          <router-link to="/travel">
            <img src="../assets/images/travel.jpg">
            <h5 class="category">Travel</h5>
          </router-link>
        </li>
        <li>
          <router-link to="/portraits">
            <img src="../assets/images/portrait.jpg">
            <h5 class="category">Portraits</h5>
          </router-link>
        </li>

        <li>
          <router-link to="/other">
            <img src="../assets/images/other.jpg">
            <h5 class="category">Other</h5>
          </router-link>
        </li>

      </ul>
    </div>

    <img src='../assets/images/party.jpg' alt="Photobooth" class="large-img">

    <!--<h2><router-link to="/admin">Admin Page</router-link></h2>-->
    
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  background-color: black;
}

.large-img {
  opacity: 1;
}

/* ---------- Square Images ---------- */
ul {
    margin: 0 auto;
    padding: 0;
    font-size: 0; /* Remember to change it back to normal font size if using captions */
    list-style: none;
}

ul li {
    display: inline-block;
    // *display: inline;/*for IE6 - IE7*/
    width: 25%;
    vertical-align: middle;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
        
/* The wrapper for each item */
li {
    display: block;
    position: relative;
    overflow: hidden;
}
        
/* If image layer */
img {
    display: block;
    width: 100%;
    height: auto;
    opacity: 0.95;
    transition: 0.3s linear;
   -webkit-transition: 0.3s linear;
   -moz-transition: 0.3s linear;
}

ul li:hover img {
    transform:scale(1.02);
    opacity: 1;
}

/* Captions */
.category {
    Font-Family: 'Work Sans', Sans-Serif;
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 40px;
    top: 40%;
    color: white;
    opacity: 0;
    transition: .5s linear;
}

ul li:hover .category {
    transform: translateY(0px);
    opacity: 1;
}

@media (max-width: 9000px) {
    ul li {
        width: 25%;
    }
}

@media (max-width: 1000px) {
    ul li {
        width: 33.3%;
    }
}

@media (max-width: 600px) {
    ul li {
        width: 33.33%;
    }

    ul li img {
      opacity: 1;
    }

    ul li .category {
      opacity: 1;
    }
}

@media (max-width: 550px) {
    ul li {
        width: 50%;
    }
}

</style>

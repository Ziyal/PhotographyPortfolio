<template>
  <div class="home">

    <img src='../assets/images/header_2.jpg' alt="Portrait" class="large-img">

    <div class="photos">
      <ul>
        <li> <!-- Nature -->
          <router-link :to="{ name: 'Category', params: { category: categories.Nature }}">
            <img src="../assets/images/nature.jpg">
            <h5 class="category">Nature</h5>
          </router-link>
        </li>

        <li> <!-- Lifestyle -->
          <router-link :to="{ name: 'Category', params: { category: categories.Lifestyle }}">
            <img src="../assets/images/lifestyle.jpg">
            <h5 class="category">Lifestyle</h5>
          </router-link>
        </li>

        <li> <!-- Event -->
          <router-link :to="{ name: 'Category', params: { category: categories.Event }}">
            <img src="../assets/images/event.jpg">
            <h5 class="category">Events</h5>
          </router-link>
        </li>

        <li> <!-- Headshots -->
          <router-link :to="{ name: 'Category', params: { category: categories.Headshots }}">
            <img src="../assets/images/headshot.jpg">
            <h5 class="category">Headshots</h5>
          </router-link>
        </li>

        <li> <!-- Family -->
          <router-link :to="{ name: 'Category', params: { category: categories.Family }}">
            <img src="../assets/images/family.jpg">
            <h5 class="category">Family</h5>
          </router-link>
        </li>

        <li> <!-- Travel -->
          <router-link :to="{ name: 'Category', params: { category: categories.Travel }}">
            <img src="../assets/images/travel.jpg">
            <h5 class="category">Travel</h5>
          </router-link>
        </li>

        <li> <!-- Portraits -->
          <router-link :to="{ name: 'Category', params: { category: categories.Portraits }}">
            <img src="../assets/images/portrait.jpg">
            <h5 class="category">Portraits</h5>
          </router-link>
        </li>

        <li> <!-- Other -->
          <router-link :to="{ name: 'Category', params: { category: categories.Other }}">
            <img src="../assets/images/other.jpg">
            <h5 class="category">Other</h5>
          </router-link>
        </li>

      </ul>
    </div>

    <img src='../assets/images/party.jpg' alt="Photobooth" class="large-img">
    
  </div>
</template>

<script>
export default {
    data: function() {
        return {
          categories: { Portraits: "Portraits", Travel: "Travel", Lifestyle: "Lifestyle", Event: "Event", Nature: "Nature", Headshots: "Headshots", Other: "Other", Family: "Family" },
        }
    },
}
</script>

<style scoped>
/* Main Container */
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
    // *display: inline; /*for IE6 - IE7*/
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
        
img {
    display: block;
    width: 100%;
    height: auto;
    opacity: 0.95;
    transition: 0.3s linear;
   -webkit-transition: 0.3s linear;
   -moz-transition: 0.3s linear;
}

/* Enlarge on hover */
ul li:hover img {
    transform:scale(1.02);
    opacity: 1;
}

/* categories for square images */
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

/* Show category on hover */
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

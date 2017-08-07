<template>
  <div class="Home">

    <div class="photos">

      <ul>
        <li>
          <h5 class="category">Nature</h5>
          <img src="../assets/images/IMG_4992.jpg">
        </li>

        <li>
          <h5 class="category">Portraits</h5>
          <img src="../assets/images/IMG_4215.jpg">
        </li>

        <li>
          <h5 class="category">Travel</h5>
          <img src="../assets/images/IMG_3946.jpg">
        </li>

        <li>
          <img src="../assets/images/IMG_3812-2.jpg">
        </li>

        <li>
          <img src="../assets/images/IMG_4917.jpg">
        </li>

        <li>
          <img src="../assets/images/IMG_4812.jpg">
        </li>

        <li>
          <img src="../assets/images/IMG_4500.jpg">
        </li>

        <li>
          <img src="../assets/images/IMG_4473.jpg">
        </li>

      </ul>
    </div>

    <h2><router-link to="/admin">Admin Page</router-link></h2>
    
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
    // max-width: 900px;
    margin: 0 auto; /*center aligned*/
    padding: 0;
    font-size: 0; /* Remember to change it back to normal font size if have captions */
    list-style: none;
    // background-color:#000;
}
ul li {
    display: inline-block;
    // *display:inline;/*for IE6 - IE7*/
    width: 25%;
    vertical-align:middle;
    box-sizing:border-box;
    margin:0;
    padding:0;
}
        
/* The wrapper for each item */
li {
    /*margin:12px;
    box-shadow:0 0 6px rgba(0,0,0,0.3);*/
    display:block;
    position: relative;
    overflow:hidden;
}
        
/* If have the image layer */
img {
    display:block;
    width: 100%;
    height: auto;
    opacity: 0.95;
    transition: 0.3s linear;
   -webkit-transition: 0.3s linear;
   -moz-transition: 0.3s linear;
    // transform:scale(1);
    // transition:all 1s;
}

ul li:hover img {
    transform:scale(1.03);
    opacity: 1;
}
        

/* If have captions */
.category {
    display: block;
    padding: 0 30px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    text-align:center;
    text-transform:capitalize;
    font-size: 40px;
    top:40%;
    color:white;
    opacity:0;
    filter:alpha(opacity=0);/*For older IE*/
    transform:translateY(-20px);
    transition:all .3s;
}

ul li:hover .category {
    transform:translateY(0px);
    opacity: 0.9;
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
}

@media (max-width: 550px) {
    ul li {
        width: 50%;
    }
}


</style>

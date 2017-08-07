<template>
  <div class="Home">

    <div class="photos">

      <ul>
        <li>
          <div class="category">
            <h5>Nature</h5>
          </div>
          <img src="../assets/images/IMG_4992.jpg">
        </li>

        <li>
          <img src="../assets/images/IMG_4215.jpg">
        </li>

        <li>
          <img src="../assets/images/IMG_3946.jpg">
        </li>

        <li>
          <img src="../assets/images/IMG_3812-2.jpg">
        </li>

      </ul>
    </div>

    <h2><router-link to="/admin">Admin Page</router-link></h2>
    
  </div>
</template>

<script>
// export default {
//   name: 'Home',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



li {
  list-style-type: none;
  display: inline-block;
  // flex-direction: column;
  background-color: black;
  max-height: 300px;

}

.category {
  z-index:100;
  // display: none;
  position: absolute;
  // width: 300px;
  text-align: center;
  font-size: 40px;
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

</style>

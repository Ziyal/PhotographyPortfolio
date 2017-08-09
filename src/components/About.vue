<template>
  <div class="about">
    <h1>About</h1>

    <img src='../assets/images/sereina-top.jpg' alt="Sereina at Lake Coeur d'Alene"  class="content">

    <ul>
      <li>
        <img src="../assets/images/sereina1.jpg" class="content">
      </li>

      <li>
        <p class="content">Paragraph about me and lots of cool stuff. It will show people how charming I am. Obviously</p>
      </li>

      <li>
        <img src="../assets/images/sereina2.jpg" class="content">
      </li>
    </ul>

  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
    margin: 0 auto;
    padding: 0;
    font-size: 0; /* Remember to change it back to normal font size if using captions */
    list-style: none;
}

ul li {
    display: inline-block;
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

.content {
  display: block;
  width: 100%;
  height: auto;
  vertical-align: top;
}

@media (max-width: 9000px) {
    ul li {
        width: 33.3%;
    }
}

@media (max-width: 1000px) {
    ul li {
        width: 33.3%;
    }
}

@media (max-width: 600px) {
    ul li {
        width: 50%;
    }
}

@media (max-width: 550px) {
    ul li {
        width: 50%;
    }
}


</style>

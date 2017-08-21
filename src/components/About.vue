<template>
  <div class="about">
    <h1>About</h1>

    <ul>
      <li>
        <img src="../assets/images/sereina2.jpg" class="content">
      </li>

      <li>
        <img src="../assets/images/sereina6.jpg" class="content">
      </li>

      <li>
        <img src="../assets/images/sereina5.jpg" class="content">
      </li>

      <li>
        <img src="../assets/images/sereina7.jpg" class="content">
      </li>

      <li>

        <p class="text-box">● ● ●</p>
        <p class="text-box">I'm Sereina. Born a raised in the beautiful Seattle area. Lover of lindy hop, Disney parks, and old black and white movies. Lifestyle and portrait photographer.</p>

        <p class="text-box">My goal is to create natural and authentic photos that represent who you really are. I want to showcase that charming personality you have and display that passion that everyone knows about.</p>

        <p class="text-box">● ● ●</p>

        <!--<p class="text-box bottom-paragraph">I'm really big on candid emotions and try to capture that feeling with my camera. Odds are I'll end up telling bad jokes or acting like a goofball, so if you're down for that kinda action, shoot me an email!</p>-->
      </li>

      <li>
        <img src="../assets/images/sereina1.jpg" class="content">
      </li>

      <li>
        <img src="../assets/images/sereina3.jpg" class="content">
      </li>
      
      <li>
        <img src="../assets/images/sereina8.jpg" class="content">
      </li>

      <li>
        <img src="../assets/images/sereina4.jpg" class="content">
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
    text-align: center;
}

.content {
  display: block;
  width: 100%;
  height: auto;
  vertical-align: top;
}

.text-box {
    width: 90%;
    display: inline-block;
}

@media (max-width: 9000px) {
    ul li {
        width: 33.3%;
    }
}

@media (max-width: 1000px) {
    .text-box {
        font-size: 13px;
    }
}

@media (max-width: 900px) {
    .text-box {
        font-size: 11px;
    }
}
@media (max-width: 600px) {
    ul li {
        width: 50%;
    }

    .text-box {
        width: 100%;
    }
}

@media (max-width: 550px) {
    ul li {
        width: 50%;
    }
}


</style>

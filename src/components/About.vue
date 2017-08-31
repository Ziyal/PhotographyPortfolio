<template>
  <div class="about">
    <h1>About</h1>

    <!-- Photo Squares. 3x3 grid. -->
    <ul>
      <li>
        <img src="../assets/images/sereina2.jpg" class="photo">
      </li>
      <li>
        <img src="../assets/images/sereina6.jpg" class="photo">
      </li>
      <li>
        <img src="../assets/images/sereina5.jpg" class="photo">
      </li>
      <li>
        <img src="../assets/images/sereina7.jpg" class="photo">
      </li>

      <li>
        <p class="text-box">● ● ●</p>
        <p class="text-box">I'm Sereina. Born a raised in the beautiful Seattle area. Lover of lindy hop, Disney parks, and old black and white movies. Lifestyle and portrait photographer.</p>
        <p class="text-box">My goal is to create natural and authentic photos that represent who you really are. I want to showcase that charming personality you have and display that passion that everyone knows you for.</p>
        <p class="text-box">● ● ●</p>

        <!--<p class="text-box bottom-paragraph">I'm really big on candid emotions and try to capture that feeling with my camera. Odds are I'll end up telling bad jokes or acting like a goofball, so if you're down for that kinda action, shoot me an email!</p>-->
      </li>
      <li>
        <img src="../assets/images/sereina1.jpg" class="photo">
      </li>
      <li>
        <img src="../assets/images/sereina3.jpg" class="photo">
      </li>
      <li>
        <img src="../assets/images/sereina8.jpg" class="photo">
      </li>
      <li>
        <img src="../assets/images/sereina4.jpg" class="photo">
      </li>
    </ul>

  </div>
</template>

<script>

</script>

<style scoped>
/* --------- Square Images -------- */
ul {
    margin: 0 auto;
    padding: 0;
    font-size: 0;
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

.photo {
  display: block;
  width: 100%;
  height: auto;
  vertical-align: top;
}

/* Content in middle square */
.text-box {
    width: 90%;
    display: inline-block;
}

/* Make resposive */
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

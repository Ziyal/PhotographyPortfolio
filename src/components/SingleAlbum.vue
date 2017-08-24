<template>
  <div class="album">
    <h2 class="title">ALBUM NAME GOES HERE</h2>
    <hr>

    <div class="images" v-for="image in all_photos">
        <img v-bind:src="'../static/uploads/albums/' + image.location" alt="photo"/>
    </div>


  </div>
</template>

<script>
const axios = require('axios');

export default {
    data: function() {
        return {
          all_photos: [],
          album: [],
        }
    },
    created: function() {
      this.FindAlbum();
      this.FindPhotos();
    },
    methods: {
      FindAlbum() {
          var id = { id: this.$route.params.id};
          axios.post('http://localhost:3000/find_album', id)
              .then(response => {
                  this.album = response.data;
              })
              .catch(err => console.log(err))
      },
      FindPhotos() {
          var id = { id: this.$route.params.id};
          axios.post('http://localhost:3000/find_photos', id)
            .then(response => {
                  this.all_photos = response.data;
                  console.log(this.all_photos)
              })
              .catch(err => console.log(err))
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.album {
    margin-top: 50px;
}

.title {
    text-align: center;
    padding-top: 50px;
}

img {
    width: 50%;
}

@media (max-width: 9000px) {

}

@media (max-width: 1000px) {

}

@media (max-width: 900px) {

}
@media (max-width: 600px) {

}

@media (max-width: 550px) {

}

</style>

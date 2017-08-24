<template>
  <div class="albums">
    <h2 class="title">Albums</h2>
    <hr>

    <div class="albums">
        <div v-for="album in all_albums">
            <router-link :to="{ name: 'SingleAlbum', params: { id: album._id }}"><h2>{{ album.title }}</h2></router-link>
        </div>
    </div>


  </div>
</template>

<script>
const axios = require('axios');

export default {
    data: function() {
        return {
          all_albums: [],
          album: [{
            title: '',
            description: '',
            category: ''
          }],
        }
    },
    created: function() {
      this.DisplayAlbums();
    },
    methods: {
      DisplayAlbums() {
        axios.get('http://localhost:3000/display_albums')
          .then(response =>  {
            this.all_albums = response.data;
          })
          .catch(err => console.log(err))
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.albums {
    margin-top: 50px;
}

.title {
    text-align: center;
    padding-top: 50px;
}

.sub-title {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 50px;
    font-style: italic;
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

<template>
  <div class="albums">
    <h2 class="title">Albums</h2>

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
        }
    },
    created: function() {
      this.DisplayAlbums();
    },
    methods: {
      // Retrieves all albums from DB 
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

<style scoped>
.albums {
    margin-top: 50px;
}

.title {
    text-align: center;
    font-family: 'Work Sans', Sans-Serif;
    font-size: 40px;
    font-weight: bold;
    padding-top: 15px;
    margin-bottom: 15px;
}

</style>

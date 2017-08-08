<template>
  <div class="dashboard">
    <h1>Admin Dashboard</h1>
    
    <h2>Create an Album</h2>
    <div class="create-album">
      <form action="/create_album" method="post" role="form" @submit.prevent="CreateAlbum()">
        <input type="text" name="title" v-model="album.title" placeholder="Title">
        <input type="text" name="description" v-model="album.description" placeholder="Description">
        <select name="category" v-model="album.category">
          <option value="Portraits">Portraits</option>
          <option value="Travel">Travel</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Event">Event</option>
          <option value="Nature">Nature</option>
        </select>
        <br>
        <input type="submit" value="Create Album" class="submit-btn">
      </form>
    </div>

    <div class="all-albums">
      <h2>All Albums</h2>

      <table style="width:100%">
        <tr v-for="album in all_albums">
          <td><router-link :to="{ name: 'AlbumAdmin', params: { id: album._id }}">{{album.title}}</router-link></td>
          <td>{{album.description}}</td> 
          <td>{{album.category}}</td>
          <td>
            <router-link :to="{name: 'EditAdmin', params: { id: album._id }}">Edit</router-link>
            <router-link :to="{name: 'DeleteAdmin', params: { id: album._id }}">Delete</router-link>
          </td>
        </tr>
      </table>
      
    </div>




  </div>
</template>

<script>
const axios = require('axios');

export default {
    data: function() {
        return {
          all_albums: [],
          album: {
            title: '',
            description: '',
            category: ''
          },
          // curr_user = CheckStatus();
        }
    },
    created: function() {
      this.DisplayAlbums();
    },
    methods: {
      DisplayAlbums() {
        axios.get('http://localhost:3000/display_albums')
          .then(response =>  {
            console.log("Albums found: ", response.data);
            this.all_albums = response.data;
          })
          .catch(err => console.log(err))
      },

      CreateAlbum() {
        var album = {
          title: this.album.title,
          description: this.album.description,
          category: this.album.category
        }
        
        // Sends album data to server
        axios.post('http://localhost:3000/create_album', album)
          .then(function() {
            console.log("CreateAlbum success!!!!!!!!!!!!")
          })
          .catch(err => console.log(err))
      },

      // Checks if admin is logged in
      CheckSatus() {
        axios.post('http://localhost:3000/check_status')
          .then(data => curr_user = data)
          .catch(err => console.log(err))

        
      }
    }
}
</script>

<style scoped>

h2 {
  Font-Family: 'Work Sans', Sans-Serif;
  text-align: center;
  font-size: 25px;
}

.all-albums {
  display: inline-block;
  width: 75%;
}


</style>

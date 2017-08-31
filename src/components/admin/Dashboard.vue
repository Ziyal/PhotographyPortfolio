<template>
  <div class="dashboard">
    <h2 class="main-title">Admin Dashboard</h2>
    
    <!-- Form to Create Album -->
    <div class="create-album-container">
      <h2 class="title">Create an Album</h2>
      <form action="/create_album" method="post" role="form" @submit.prevent="CreateAlbum()">
        <b-form-input type="text" name="title" v-model="album.title" placeholder="Title" class="inputs"></b-form-input>
        <b-form-input type="text" name="description" v-model="album.description" placeholder="Description" class="inputs"></b-form-input>
        <b-form-select name="category" v-model="album.category" :options="category_options" class="inputs"></b-form-select>
        <br>
        <input type="submit" value="Create Album" class="btn btn-primary btn-block inputs">
      </form>
    </div>

    <!-- All Albums displayed in Table -->
    <div class="albums-container">
      <h2 class="title">All Albums</h2>

      <b-table striped hover :items="items" :fields="fields">
          <template slot="title" scope="row"><router-link :to="{ name: 'SingleAlbum', params: { id: row.item._id }}">{{row.value}}</router-link></template> 
          <template slot="description" scope="row">{{row.value}}</template> 
          <template slot="category" scope="row">{{row.value}}</template>
          <template slot="actions" scope="row">
            <router-link :to="{name: 'UploadAdmin', params: { id: row.item._id, category: row.item.category }}">Upload</router-link>
            <router-link :to="{name: 'EditAdmin', params: { id: row.item._id }}">Edit</router-link>
            <router-link :to="{name: 'DeleteAdmin', params: { id: row.item._id }}">Delete</router-link>
          </template>
      </b-table>

      <!--<table style="width:100%">
        <tr v-for="album in all_albums">
          <td><router-link :to="{ name: 'SingleAlbum', params: { id: album._id }}">{{album.title}}</router-link></td>
          <td>{{album.description}}</td> 
          <td>{{album.category}}</td>
          <td>
            <router-link :to="{name: 'UploadAdmin', params: { id: album._id, category: album.category }}">Upload</router-link>
            <router-link :to="{name: 'EditAdmin', params: { id: album._id }}">Edit</router-link>
            <router-link :to="{name: 'DeleteAdmin', params: { id: album._id }}">Delete</router-link>
          </td>
        </tr>
      </table>-->

    </div>

  </div>
</template>

<script>
const axios = require('axios');

export default {
    data: function() {
        return {
          items: [],
          album: {
            title: '',
            description: '',
            category: ''
          },
          category_options: [
            { value: "Nature", text: "Nature" },
            { value: "Lifestyle", text: "Lifestyle" },
            { value: "Event", text: "Event" },
            { value: "Headshots", text: "Headshots" },
            { value: "Family", text: "Family" },
            { value: "Travel", text: "Travel" },
            { value: "Portraits", text: "Portraits" },
            { value: "Other", text: "Other" },
          ],
          // Titles for table
          fields: {
            title: { label: "Title" },
            description: { label: "Description" },
            category: { label: "Category" },
            actions: { label: "Actions" }
          }
        }
    },
    created: function() {
      this.DisplayAlbums();
    },
    methods: {
      // Retrieves all albums to display
      DisplayAlbums() {
        axios.get('http://localhost:3000/display_albums')
          .then(response =>  {
            this.items = response.data;
          })
          .catch(err => console.log(err))
      },

      // Takes form data dn saves to database
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

          router.push({ name: 'Dashboard'})
      },
    }
}

</script>

<style scoped>
.dashboard {
  margin-top: 57px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.main-title {
  text-align: center;
  margin-bottom: 0px;
}

.title {
  Font-Family: 'Work Sans', Sans-Serif;
  text-align: center;
  font-size: 25px;
}

/* ---------- Album Form ---------- */

.create-album-container {
  margin: 25px;
}

.inputs {
  margin: 5px 0px 5px 0px;
}

/* ---------- Display Albums ---------- */
.albums-container {
  margin: 25px;
}

</style>

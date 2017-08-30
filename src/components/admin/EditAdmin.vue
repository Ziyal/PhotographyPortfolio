<template>
  <div class="edit-admin">
    <!--<h2>Edit Album - {{album[0].title}}</h2>-->

    <div class="edit-container">
      <form action="/edit_album" method="post" role="form" @submit.prevent="EditAlbum()">
        <b-form-input type="text" name="title" v-model="updated_album.title" :value="album[0].title"></b-form-input>
        <b-form-input type="text" name="description" v-model="updated_album.description" :value="album[0].description"></b-form-input>
        <b-form-select name="category" v-model="updated_album.category" :options="category_options"></b-form-select>
        <br>
        <input type="submit" value="Save" class="btn">
      </form>
    </div>

    <h5 v-if="notifications[0]">{{ notifications[0].msg }}</h5>


  </div>
</template>

<script>
const axios = require('axios');
import Dropzone from 'vue2-dropzone';

export default {
    data: function() {
        return {
          album: {
            _id: '',
            title: '',
            description: '',
            category: ''
          },
          updated_album: {
            _id: '',
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
          notifications: []
        }
    },
    components: {
      Dropzone
    },
    created: function() {
        this.FindAlbum();
    },
    methods: {
      FindAlbum() {
          var id = { id: this.$route.params.id};
          axios.post('http://localhost:3000/find_album', id)
              .then(response => {
                  // console.log("Album Found: ", response.data)
                  this.album = response.data;
                  this.updated_album.id = this.$route.params.id;
              })
              .catch(err => console.log(err))
      },
      EditAlbum() {
        var user = {
          email: this.user.email,
          password: this.user.password
        }
        
        axios.post('http://localhost:3000/login', user)
          .then(function() {
            this.$router.push({ path: '/dashboard'})
            // router.go('/dashboard')
            // this.$router.push({path: "/dashboard"})
          })
          .catch((err) => {
            console.log(err),
            this.notifications.push({
              msg: "Invalid email or password"
            }),
            console.log(this.notifications)
          })

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
.edit-admin {
    margin-top: 60px;
    display: block;
}

.edit-container {
  width: 75%;
  display: inline-block;
}


</style>

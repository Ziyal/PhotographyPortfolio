<template>
  <div class="edit-admin">
    <!--<h2>Edit Album - {{album[0].title}}</h2>-->

    <dropzone id="myVueDropzone" class="dropzone" :url="serverUrl" v-on:vdropzone-success="uploadSuccess"></dropzone>

  </div>
</template>

<script>
const axios = require('axios');
import Dropzone from 'vue2-dropzone';

export default {
    data: function() {
        return {
          serverUrl: 'http://localhost:3000/upload_photos/'+this.$route.params.id+'/'+this.$route.params.category,
          album: {
            title: '',
            description: '',
            category: ''
          },
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
              })
              .catch(err => console.log(err))
      },

      uploadSuccess: function(file) {
        console.log('A file was successfully uploaded')
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
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.edit-admin {
    margin-top: 60px;
    display: flex;
}

.dropzone {
  width: 85%;
  justify-content: center;
  margin: 30px;
}

</style>

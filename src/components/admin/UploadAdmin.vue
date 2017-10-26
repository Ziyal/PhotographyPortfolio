<template>
  <div class="edit-admin">
    <h2 class="main-title">{{album[0].title}}</h2>

    <div class="dropzone-container">
      <dropzone id="myVueDropzone" class="dropzone" :url="serverUrl" :parallelUploads="2" v-on:vdropzone-success="uploadSuccess"></dropzone>
    </div>
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
    padding-top: 60px;
    display: flex;
    flex-direction: column;
}

.main-title {
  padding-top: 20px;
  text-align: center;
}

.dropzone-container {
  margin: 10px 20px 50px 20px;
}

.dropzone {
  width: 100%;
  border: 2px dashed lightgrey;
  border-radius: 5px;
}

</style>

<template>
  <div class="edit-admin">
    <!--<h2>Edit Album - {{album[0].title}}</h2>-->
    
    <dropzone id="myVueDropzone" class="dropzone" url="url" ref="uploadImages" v-on:vdropzone-success="uploadSuccess"></dropzone>

    <!--<form action="/upload_photos" class="dropzone" id="image-uploader">
      <input type="file" name="file"/>
    </form>-->


  </div>
</template>

<script src="../assets/dropzone.js"></script>
<script>
const axios = require('axios');


import Dropzone from 'vue2-dropzone';

export default {
    data: function() {
        return {
          // url: 'http://localhost:3000/server/uploaded/'
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
                  console.log("Album Found: ", response.data)
                  this.album = response.data;
              })
              .catch(err => console.log(err))
      },

      // uploadImages: function(files) {
      //   console.log("Upload Images Hit!!!!!!!!!!!!!!")
      //   axios.post('http://localhost:3000/upload_photos', file)
      //     .then(function() {
      //       console.log("Send photos to server sucessfully")
      //       // redirect
      //     })
      //     .catch(err => console.log(err))

      // },

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
}

.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: #f2f2f2;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

.input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

.dropbox:hover {
    background: #eaeaea; /* when mouse over to the drop zone, change color */
  }

.dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }

</style>

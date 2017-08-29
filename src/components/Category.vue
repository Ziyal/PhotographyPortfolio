<template>
  <div class="edit-admin">
    <h1>{{category_title}}</h1>

    <div class="images-container">
        <!-- Dispalys all images in album -->
        <div class='wrapper' v-for="image in all_photos">
            <img v-bind:src="'../static/uploads/albums/' + image.location" alt="photo" class="image"/>
        </div>
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
          category_title: this.$route.params.category
        }
    },
    created: function() {
      this.FindCategory();
    },
    methods: {
        FindCategory() {
            var category = { category: this.$route.params.category};
            axios.post('http://localhost:3000/find_category', category)
                .then(response => {
                    this.all_photos = response.data;
                })
                .catch(err => console.log(err))
        },
        // Retrieves photos for single album
        FindPhotos() {
            var id = { id: this.$route.params.id};
            axios.post('http://localhost:3000/find_photos', id)
                .then(response => {
                    this.all_photos = response.data;
                })
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

.images-container {
    /* Prevent vertical gaps */
  line-height: 0;
  -webkit-column-count: 3;
  -webkit-column-gap:   0px;
  -moz-column-count:    3;
  -moz-column-gap:      0px;
  column-count:         3;
  column-gap:           0px; 
}

.images-container .wrapper .image {
/* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
}

@media (max-width: 9000px) {
  .images-container {
  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  }
}

@media (max-width: 1000px) {
  .images-container {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}

@media (max-width: 700px) {
  .images-container {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  }
}


</style>

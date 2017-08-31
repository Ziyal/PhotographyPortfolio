<template>
  <div class="edit-admin">
    <h2 class="title">{{category_title}}</h2>

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
          category_title: this.$route.params.category
        }
    },
    created: function() {
        this.FindCategory();
    },
    methods: {
        // Retrieves photos for category on route params
        FindCategory() {
            var category = { category: this.$route.params.category};
            axios.post('http://localhost:3000/find_category', category)
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

/* ------------ Photo Gallery ------------ */
.images-container {
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

/* Makes images larger on hover */
.images-container .wrapper:hover .image{
    transform:scale(1.01);
}

/* Adjusts columns based on screen size */
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

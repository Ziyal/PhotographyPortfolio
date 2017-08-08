<template>
  <div class="delete-admin">

    <h1>Are you sure you want to delete ALBUM NAME?</h1>

    <form action="/delete_album" method="post" role="form" @submit.prevent="DeleteAlbum()">
        <input type="submit" value="DELETE">
    </form>

    <button><router-link :to="'dashboard'">Back</router-link></button>

    
  </div>
</template>

<script>
const axios = require('axios');

export default {
    data: function() {
        return {
        }
    },
    methods: {

        DeleteAlbum() {
            var album = {
            title: this.album.title,
            description: this.album.description,
            category: this.album.category
            }
            
            // Sends album data to server
            axios.post('http://localhost:3000/delete_album/', album_id)
            .then(function() {
                console.log("Delete Album successful")
            })
            .catch(err => console.log(err))
        },


    }
}</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@media (max-width: 9000px) {
    .delete-admin {
        margin-top: 50px;
    }

    ul li {
        width: 25%;
    }
}

@media (max-width: 1000px) {
    ul li {
        width: 33.3%;
    }
}

@media (max-width: 600px) {
    ul li {
        width: 33.33%;
    }
}

@media (max-width: 550px) {
    ul li {
        width: 50%;
    }
}


</style>

<template>
  <div class="delete-admin">

    <h1>Are you sure you want to delete {{album[0].title}}</h1>

    <form action="/delete_album" method="post" role="form" @submit.prevent="DeleteAlbum()">
        <input type="submit" value="DELETE">
    </form>

    <button><router-link :to="{ name: 'Dashboard'}">Back</router-link></button>

    
  </div>
</template>

<script>
const axios = require('axios');

export default {
    data: function() {
        return {
            album: []
        }
    },
    created: function() {
        this.FindAlbum();
    },
    methods: {
        FindAlbum() {
            var id = { id: this.$route.params.id };
            axios.post('http://localhost:3000/find_album', id)
                .then(response => {
                    this.album = response.data;
                })
                .catch(err => console.log(err))
        },
        DeleteAlbum() {
            var album_id = this.$route.params.id;
            
            // Sends album data to server to delete
            axios.post('http://localhost:3000/delete_album/' + album_id)
            .then(function() {
                console.log("Delete Album successful")
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

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

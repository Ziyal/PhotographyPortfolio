<template>
  <div class="delete-admin">

    <div class="confirmation-container">
        <h1 class="confirmation-msg">Are you sure you want to delete <span>{{album_title}}</span>?</h1>

        <form action="/delete_album" method="post" role="form" @submit.prevent="DeleteAlbum()" class="button">
            <input type="submit" value="DELETE" class="btn btn-danger">
        </form>

        <!--<form action="/delete_album" method="post" role="form" @submit.prevent="DeleteAlbum()">
            <input type="submit" value="DELETE">
        </form>-->


        <button class="btn btn-secondary button"><router-link :to="{ name: 'Dashboard'}">Back</router-link></button>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
    data: function() {
        return {
            album_title: null
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
                    this.album_title = response.data[0].title;
                })
                .catch(err => console.log(err))
        },
        DeleteAlbum() {
            var album_id = this.$route.params.id;
            
            // Sends album data to server to delete
            axios.post('http://localhost:3000/delete_album/' + album_id)
            .then(function() {
                console.log("Delete Album successful");
                window.location.href = '#/dashboard';
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.delete-admin {
    margin-top: 50px;
}

.confirmation-container {
    padding-top: 55px;
    margin: 40px 40px 0px 40px;
    padding-bottom: 40px;
    text-align: center;
}

.confirmation-msg {
    font-size: 25px;
}

/* Album Title */
span {
    font-size: 25px;
    font-weight: bold;
}

/* Buttons */
.confirmation-container form {
    max-width: 120px;
}

.button {
    display: inline-block;
    margin: 10px;
}



</style>

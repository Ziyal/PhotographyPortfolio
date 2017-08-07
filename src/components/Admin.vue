<template>
  <div class="admin">
    <h1>Admin Login</h1>

      <form action="/login" method="post" role="form" @submit.prevent="sub()">
        <p>Email: </p><input type="email" name="email" v-model="user.email">
        <p>Password: </p><input type="password" name="password" v-model="user.password"><br>
        <input type="submit" value="login">
      </form>

  </div>
</template>


<script>
const axios = require('axios');
const router = require('vue-router');

export default {
    data: function() {
        return {
          user: {
            email: '',
            password: ''
          }
        }
    },
    methods: {
      sub() {
        var user = {
          email: this.user.email,
          password: this.user.password
        }
        
        axios.post('http://localhost:3000/login', user)
          .then(function() {
            // router.go('/dashboard')
          })
          .catch(err => console.log(err))

        // this.user.email = "";
        // this.user.password = "";

      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

<template>
  <div class="admin">

    <!-- Login Form -->
    <div class="login-container">
      <form action="/login" method="post" role="form" @submit.prevent="sub()">
        <b-form-input type="email" name="email" v-model="user.email" placeholder="Email"></b-form-input>
        <b-form-input type="password" name="password" v-model="user.password" placeholder="Password"></b-form-input>
        <b-form-input type="submit" value="LOGIN" class="btn btn-primary"></b-form-input>
      </form>
    </div>

    <!-- Displays login error -->
    <b-alert variant="danger"
             dismissible
             :show="loginError"
             @dismissed="loginError=false">
      Invalid Email or Password
    </b-alert>

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
          },
          loginError: false,
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
            this.$router.push({ path: decodeURIComponent(this.$route.query.redirect || '/')})
            // router.go('/dashboard')
            // this.$router.push({path: "/dashboard"})
          })
          .catch((err) => {
            console.log(err);
            this.loginError = true;
          })

      }
    }
}
</script>

<style scoped>
.admin {
  display: block;
  margin: 0 auto;
}

.login-container {
  margin-top: 80px;
  margin-bottom: 35px;
  display: inline-block;
}

input {
  margin-top:5px;
}

</style>

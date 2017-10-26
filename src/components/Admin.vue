<template>
  <div class="admin">

    <!-- Login Form -->
    <div class="login-container">
    <b-alert variant="danger"
             dismissible
             :show="loginError"
             @dismissed="loginError=false">
      Invalid Email or Password
    </b-alert>
      <form action="/login" method="post" role="form" @submit.prevent="sub()">
        <b-form-input type="email" name="email" v-model="user.email" placeholder="Email"></b-form-input>
        <b-form-input type="password" name="password" v-model="user.password" placeholder="Password"></b-form-input>
        <b-form-input type="submit" value="LOGIN" class="btn btn-primary"></b-form-input>
      </form>
    </div>

    <!-- Displays login error -->

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
            window.location.href = '#/dashboard';
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
  padding-top: 50px;
  text-align: center;
}

.login-container {
  width: 50%;
  max-width: 300px;
  margin: 20px;
  display: inline-block;
}

input {
  margin-top:5px;
}

</style>

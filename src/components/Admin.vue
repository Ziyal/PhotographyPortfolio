<template>
  <div class="admin">

    <div class="login-container">
      <form action="/login" method="post" role="form" @submit.prevent="sub()">
        <input type="email" name="email" v-model="user.email" placeholder="Email">
        <input type="password" name="password" v-model="user.password" placeholder="Password"><br>
        <input type="submit" value="LOGIN" class="submit-btn">
      </form>
    </div>

    <h5 v-if="notifications[0]">{{ notifications[0].msg }}</h5>

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
          notifications: []
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
            this.router.push({name: 'Dashboard'})
            // router.go('/dashboard')
            // this.$router.push({path: "/dashboard"})
          })
          .catch((err) => {
            console.log(err),
            this.notifications.push({
              msg: "Invalid email or password"
            }),
            console.log(this.notifications)
          })

      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin {
  display: block;
  margin: 0 auto;
  width: 200px;
}

.login-container {
  margin-top: 80px;
  display: inline-block;
  // width: 200px;
}

.submit-btn {
  width: 204px;
}

input {
  width: 200px;
  margin-top:5px;
}

</style>

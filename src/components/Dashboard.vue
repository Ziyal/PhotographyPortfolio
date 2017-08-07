<template>
  <div class="dashboard">
    <h1>Dashboard</h1>

  </div>
</template>

<script>
const axios = require('axios');
const router = require('vue-router');

export default {
    data: function() {
        return {
          // curr_user = CheckStatus();
        }
    },
    methods: {
      CheckSatus() {
        
        axios.post('http://localhost:3000/check_status')
          .then(data => curr_user = data)
          .catch(err => console.log(err))

        
      }
    }
}</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

<template>
  <v-app light>
    <v-toolbar fixed color="teal lighten-2" app dark :clipped-left="true">      
      <v-toolbar-title>AvarMarket</v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/wallet">Wallet</router-link>
        <router-link to="/upload">Upload</router-link>
      </div>
    </v-toolbar>
    <v-content class="contentWrapper">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'app'  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.contentWrapper {
  padding-top: 20px;
}
</style>

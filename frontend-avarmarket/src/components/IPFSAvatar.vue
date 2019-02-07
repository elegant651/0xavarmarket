<template>
    <div id="avarkey">
      <v-img id="genImg" :src="callAvatar(hash)" :width="width" :height="height"></v-img>         

    </div>
</template>
<script>

import qs from 'qs';

export default {
    props: ['hash', 'width', 'height'],
    data () {
        return {            
            genImgData: ''
        }
    },
    methods: {
        callAvatar(hash) {
            if(hash) {                
                this.axios({
                  method: 'get',
                  baseURL: 'https://gateway.ipfs.io/ipfs',
                  url: '/'+hash
                }).then((response) => {
                  this.genImgData = response.data;                  
                })      
            }
            return this.genImgData
        }
    }
}

</script>
<style scoped>

</style>
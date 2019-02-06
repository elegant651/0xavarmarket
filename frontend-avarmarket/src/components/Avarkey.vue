<template>
    <div id="avarkey">
      <v-img id="genImg" :src="callAvarkey(address)" :width="width" :height="height" />            
    </div>
</template>
<script>

import qs from 'qs';

export default {
    props: ['address', 'width', 'height'],
    data () {
        return {
            loading: false,
            genImgData: null
        }
    },
    methods: {
        callAvarkey(address) {
            if(address && !this.loading) {
                this.loading = true
                const formData = {
                    module: 'Avatar',
                    address: address
                }
                this.axios
                    .post('https://api.avarkey.com/api/', qs.stringify(formData), { 'Access-Control-Allow-Origin':'*' })
                    .then(response => {
                        // console.log("result", JSON.stringify(response))
                        const data = response.data          
                        const imgData = data.imageData                        
                        this.genImgData = imgData          
                    }).catch(error => {
                        // eslint-disable-next-line
                        console.log(error)
                    }).finally(() => {
                        this.loading = false
                    })
            }
            return this.genImgData
        }
    }
}

</script>
<style scoped>

</style>
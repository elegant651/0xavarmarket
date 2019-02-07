<template>
  <div>
    <h2>Avartar Marketplace - Currently only support for Ropsten Testnet network</h2>  
    <Marketplace />  

    <Portfolio />
  </div>
</template>
<script>
  import Marketplace from '@/components/Marketplace.vue'
  import Portfolio from '@/components/Portfolio.vue'

  export default {
    components: { 
      Marketplace,
      Portfolio
    }
  } 
</script>

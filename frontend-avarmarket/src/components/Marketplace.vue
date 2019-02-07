<template>
  <v-container grid-list-md text-xs-center>
  	<v-layout row wrap>
      <v-flex v-for="(auction, index) in auctions" :key="index" xs4>
      	<v-card>
          <!-- <v-img :src="uploadedImg(auction.image)" height="200px"></v-img> -->
          <IPFSAvatar :hash="auction.image" height="200"></IPFSAvatar>
          
      		<div>Title: {{auction.title}}</div>
          <div>Price: {{auction.price}} Ether</div>
          <div>TokenId: {{auction.tokenId}}</div>
          <div class="ellipsis">Owner: {{auction.owner}}</div>
          <div>Active: {{auction.active}}</div>
          <div>Finalized: {{auction.finalized}}</div>        
      	</v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import IPFSAvatar from '@/components/IPFSAvatar.vue'

export default {
  components: { 
    IPFSAvatar
  },

  data() {
    return {     
      ciMyNFT: null,
      ciAuctions: null, 
      auctions: []
    }
  },

  mounted() {    
    this.ciAuctions = this.$web3.eth.contract(this.$config.AUCTIONS_ABI).at(this.$config.AUCTIONS_CA)
    this.ciMyNFT = this.$web3.eth.contract(this.$config.MYNFT_ABI).at(this.$config.MYNFT_CA)
    this.getAuctions()
  },

  methods: {
	  
    getAuctions() {
      this.ciAuctions.getCount({}, (error, result) => {        
        const count = result

        for(let i=0; i<count; i++) {

          this.ciAuctions.getAuctionById(i, {}, (err, result) => {

            this.ciMyNFT.ownerOf(result[3], {}, (error, owner) => {

              this.auctions.push({
                title: result[0],
                price: this.$web3.fromWei(result[1], 'ether'),
                image: result[2],
                tokenId: result[3],
                owner: owner,
                active: result[6],
                finalized: result[7]
              })
            })            
            
          })
        }
      })
    },

    uploadedImg(dataURI){
      // return 'https://gateway.ipfs.io/ipfs/'+this.dataURI

      this.axios({
        method: 'get',
        baseURL: 'https://gateway.ipfs.io/ipfs',
        url: '/'+dataURI
      }).then((response) => {        
        return response.data;
      })      
    }
  }
}
</script>
<style scoped>
.ellipsis {
    width: 200px;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal !important;
    display: block;
}
</style>
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
  	 <v-flex xs4>      
        <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
          <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i class="fas fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="/portfolio/a.jpg" alt="" width="200">
        </a>
      </v-flex>
      <v-flex xs4>
        <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
          <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i class="fas fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="/portfolio/b.jpg" alt="" width="200">
        </a>
      </v-flex>
      <v-flex xs4>
        <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
          <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i class="fas fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="/portfolio/c.jpg" alt="" width="200">
        </a>
      </v-flex>
      <v-flex xs4>
        <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
          <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i class="fas fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="/portfolio/d.jpg" alt="" width="200">
        </a>
      </v-flex>
      <v-flex xs4>
        <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
          <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i class="fas fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="/portfolio/e.jpg" alt="" width="200">
        </a>
      </v-flex>
      <v-flex xs4>
        <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
          <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
              <i class="fas fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="/portfolio/f.jpg" alt="" width="200">
        </a>
      </v-flex>

    </v-layout>
  </v-container>

</template>
<script>

export default {

  data() {
    return {

    }
  },

  methods: {

  }
}

</script>
<style scoped>
.portfolio .portfolio-item {
  position: relative;
  display: block;
  max-width: 250px;
  margin-bottom: 15px;
}

.portfolio .portfolio-item .portfolio-item-caption {
  -webkit-transition: all ease 0.5s;
  transition: all ease 0.5s;
  opacity: 0;
  background-color: rgba(24, 188, 156, 0.9);
}

.portfolio .portfolio-item .portfolio-item-caption:hover {
  opacity: 1;
}

.portfolio .portfolio-item .portfolio-item-caption .portfolio-item-caption-content {
  font-size: 1.5rem;
}

@media (min-width: 576px) {  
  .portfolio .portfolio-item {
    margin-bottom: 30px;
  }
}
</style>
<template>
  <div>
    <Header/>
    <!-- <br>
    <br> -->
    <section class="hero info is-medium has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title  has-text-white">QuickFill</h1>
          <h2 class="subtitle  has-text-white">
            <em>The most Safe and Convenient way to Refill</em>
          </h2>
        </div>
      </div>
    </section>
    <!-- end of section -->
    <nav class="level blue has-text-white">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            <i class="fas fa-lightbulb fa-4x"></i>
          </p>
          <p>10 different types of Cylinder <br>
            from different brands
            </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            <i class="fas fa-male fa-4x"></i>
          </p>
          <p>No long Queus!<br>
            The wait to refill is ove
            </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
         <p class="heading">
            <i class="fas fa-burn fa-4x"></i>
          </p>
          <p>Safer than ever.<br>
          visit no gas station
        </p>
        </div>
      </div>
    </nav>
    
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style scoped>
.info {
  background-color:#45B39D;
  color: #fff;
}

.level {
  padding: 28px;
}

.blue{
  background-color: #566573;
  color: #000;
}
 
  .bg-img { 
        background-image: url(https://unsplash.com/photos/vijegS-rHnM) ;
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        background-color: #999;

 }
</style>

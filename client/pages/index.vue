<template>
  <div>
    <Header/>
    <!-- <br>
    <br>-->
    <section class="hero info is-medium has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-white">QuickFill</h1>
          <h2 class="subtitle has-text-white">
            <em>The most Safe and Convenient way to Refill</em>
          </h2>
          <nuxt-link to="/shop" class="button is-2 is-rounded is-primary">shop now!</nuxt-link>
        </div>
      </div>
      <hr>
    </section>
    <!-- end of section -->
    <nav class="level blue has-text-white">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            <i class="fas fa-lightbulb fa-4x"></i>
          </p>
          <p>10 different types of Cylinder
            <br>from different brands
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            <i class="fas fa-male fa-4x"></i>
          </p>
          <p>No long Queue!
            <br>The wait to refill is over
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            <i class="fas fa-burn fa-4x"></i>
          </p>
          <p>Safer than ever.
            <br>visit no gas station
          </p>
        </div>
      </div>
    </nav>
    <!-- a new section -->
    <section class="top">
      <!-- <div class="ccontainer is-12">
        <h1 class="h title has-text-centered has-text-primary">Share</h1>
      </div>-->
      <div class="container is-fluid">
        <nav class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">
                <i class="fab fa-whatsapp fa-4x"></i>
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">
                <i class="fab fa-twitter fa-4x"></i>
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">
                <i class="fab fa-facebook fa-4x"></i>
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">
                <i class="fab fa-instagram fa-4x"></i>
              </p>
            </div>
          </div>
        </nav>
      </div>
      <!-- <hr class="h"> -->
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.info {
  background-color: #22313f;
  color: #fff;
}

.level {
  padding: 20px;
}

.blue {
  background-color: #22313f;
  color: #000;
}

.bg-img {
  background-image: url(https://unsplash.com/photos/vijegS-rHnM);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}

hr {
  border: 1px solid #fff;
}
.h {
  border-bottom: 3px solid #22313f;
  box-shadow: #22313f;
  width: 80%;
  text-align: center;
  margin-left: 20px;
  margin-bottom: 5rem;
  letter-spacing: 3rem;
  text-transform: uppercase;
}

.top {
  margin-top: 10rem;
}
</style>

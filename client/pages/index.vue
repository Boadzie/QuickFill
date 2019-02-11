<template>
  <section>
    <div>
      <Header/>
      <br>
      <br>
      <section class="container">
        <div class="jumbotron jumbotron-fluid blue">
          <div class="container text-center text-white">
            <h1 class="display-4">
              <strong>Quick</strong>Fill
            </h1>
            <em class>The easiest way to refill!</em>
          </div>
        </div>
      </section>
      <!-- the cards section -->
      <section class="container">
        <div class="row">
          <div class="card col-md-4 text-center" style="width: 18rem;">
            <i class="card-img-top p-2 fas fa-gas-pump fa-4x" style="color:#2a2a2a"></i>
            <div class="card-body">
              <h5 class="card-title">
                <strong>Bring your Cylinder</strong>
              </h5>
              <p
                class="card-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">shop now</a>
            </div>
          </div>
          <!-- second card -->
          <div class="card col-md-4 text-center" style="width: 18rem;">
            <i class="card-img-top p-2 far fa-money-bill-alt fa-4x" style="color:#2a2a2a"></i>
            <div class="card-body">
              <h5 class="card-title">
                <strong>Pay</strong>
              </h5>
              <p
                class="card-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">shop now</a>
            </div>
          </div>
          <!-- third card -->
          <div class="card col-md-4 text-center" style="width: 18rem;">
            <i class="card-img-top p-2 fas fa-walking fa-4x" style="color:#2a2a2a"></i>
            <div class="card-body">
              <h5 class="card-title">
                <strong>Go</strong>
              </h5>
              <p
                class="card-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">shop now</a>
            </div>
          </div>
        </div>
      </section>
      <!-- end of card -->
      <Footer/>
    </div>
  </section>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.blue {
  background-color: #212f3c;
}
</style>


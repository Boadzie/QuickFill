<template>
  <div>
    <Header/>
    <section class="hero info is-medium has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Medium title</h1>
          <h2 class="subtitle">Medium subtitle</h2>
        </div>
      </div>
    </section>
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
  background-color: #626567 !important;
  color: #fff;
}
</style>

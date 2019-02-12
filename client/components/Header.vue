<template>
  <div>
    <no-ssr>
      <nav class="navbar grey " role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link
            class="navbar-item"
            to="/"
            style="font-weight:bolder; text-transform:uppercase;letter-spacing:5px;"
          >
            <strong>Quick</strong>Fill
          </nuxt-link>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            @click="isOpen = !isOpen"
            v-bind:class="{'is-active': isOpen}"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
          <div class="navbar-end">
            <nuxt-link class="navbar-item" to="/insights">Shop</nuxt-link>
            <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
            <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
            <nuxt-link to class="navbar-item">
              <i class="fas fa-shopping-cart"></i>
            </nuxt-link>
          </div>
        </div>
      </nav>
    </no-ssr>
  </div>
</template>

<script >
export default {
  data: () => {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
nav {
  font-size: 20px;
}

.navbar-item {
  font-size: 16px;
}

.grey {
  color: #fff !important;
  background-color:#F2F3F4 !important;
}
</style>

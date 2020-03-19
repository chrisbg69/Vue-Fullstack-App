<template>
  <div class="notFoundContainer">
    <div class="m-b-xxl">
      <h1 class="title">{{title}}</h1>
      <router-link :to="{name: navigateToPage}" class="button is-primary is-focused">{{navigateToText}}</router-link>
    </div>
    <h2 class="subtitle">
      {{status}}
      <span>:(</span>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    status: {
      required: true,
      type: String
    },
    navigateToPage: {
      required: true,
      type: String
    },
    navigateToText: {
      required: true,
      type: String
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 40px;
  text-align: center;
}

.button  {
    width: 20%;
    margin: 0 auto;
    display: block;
}
.subtitle {
  font-size: 140px;
  text-align: center;
}
.notFoundContainer {
  margin-top: 80px;
  min-height: 70vh;
}
</style>
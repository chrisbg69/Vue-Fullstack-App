<template>
  <div class="container">
    <ErrorView :title="'Page you are trying to access doesn\'t exist'" 
               :status="'404'"
               :navigateToPage="'PageHome'"
               :navigateToText="'back to Home'"/>
  </div>
</template>

<script>
import ErrorView from '../components/ErrorView'
export default {
    components: {
        ErrorView
    }
};
</script>

<style scoped>

</style>
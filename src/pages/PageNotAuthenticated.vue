<template>
  <div class="container">
    <ErrorView :title="'You are not authenticated, please login'" 
               :status="'401'"
               :navigateToPage="'PageLogin'"
               :navigateToText="'back to Login page'"/>
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
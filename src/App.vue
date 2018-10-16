<template>
  <div id="app">
    <v-ons-page :class="'test-page'">
      <div class="errors">
        <div class="center"><v-ons-icon icon="fa-exclamation-triangle" size="40px"></v-ons-icon></div>
      </div>

      <v-ons-modal>
        <p style="text-align: center">
          <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
          <br><br>
        </p>
      </v-ons-modal>

      <splitter />
    </v-ons-page>
  </div>
</template>

<script>
import Splitter from './components/Splitter'

export default {
  name: 'App',
  components: {
    Splitter
  }
}
</script>

<style scoped lang="css">
  .errors {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .center {
    margin: 10px;
    text-align: center;
  }
</style>

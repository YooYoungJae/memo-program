<template>
    <v-app>
      <my-header></my-header>
      <div class="mainView">
        <router-view/>
      </div>
      <my-footer></my-footer>
    </v-app>
</template>

<script>
  import MyHeader from './Header'
  import MyFooter from './Footer'
    export default {
      name: "Home",
      components:{
        MyHeader, MyFooter
      },
      data: function () {
        return {
          counter: 0,
        }
      }

    }
</script>

<style scoped>
.mainView{
  min-height: 700px;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;

}
</style>

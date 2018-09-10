<template>
    <div >
      <div class="header-wrapper">
        <v-layout align-center row fill-height>
          <div class="logo" @click="goMyMemo">My Memo</div>
          <h4 class="ml-3 color-white cp" @click="goIdeaBox">Idea Box</h4>
          <h4 class="ml-3 color-white cp" @click="goMyInfo">My Info</h4>
          <v-spacer></v-spacer>
          <h4 class="color-white cp mr-3">언어변경</h4>
        </v-layout>
      </div>
      <div class="dummy-header">

      </div>
    </div>
</template>

<script>
    export default {
      name: "Header",
      methods:{
        goMyMemo(){
          this.$route.push("/")
        },
        goIdeaBox(){
          this.$route.push("/IdeaBox")
        },
        goMyInfo(){
          this.$route.push("/MyInfo")
        }
      }
    }
</script>

<style scoped>
.header-wrapper{
  height: 60px;
  background-color: #3CD070;
  position: fixed;
  width: 100%;
}
.dummy-header{
  height: 60px;
}
  .logo{
    color: white;
    font-size: 20px;
    margin-left: 20px;
    cursor: pointer;
  }
</style>

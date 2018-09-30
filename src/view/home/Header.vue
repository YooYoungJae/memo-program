<template>
    <div >
      <div class="header-wrapper">
        <v-layout align-center row fill-height>
          <img src="../../assets/logo.png" class="logo" @click="goMain">
          <h4 class="ml-3 color-white cp" @click="goSelectFoods">뭐먹지?</h4>
          <h4 class="ml-3 color-white cp" @click="goWhoPay">누가 쏠까!</h4>
          <h4 class="ml-3 color-white cp" @click="goMyInfo">개발자 정보</h4>
          <v-spacer></v-spacer>
          <h4 class="color-white cp mr-3" @click="showDevelopAlert">언어변경</h4>
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
        goMain(){
          this.$router.push("/")
        },
        goSelectFoods(){
          this.$router.push("/selectFoods")
        },
        goWhoPay(){
          this.$eventBus.$emit('whoPay');
          this.$router.push("/whoPay")
        },
        goMyInfo(){
          this.$router.push("/MyInfo")
        },
        showDevelopAlert(){
          alert("준비중입니다");
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
    width: 80px;
    margin-left: 20px;
    cursor: pointer;
  }
</style>

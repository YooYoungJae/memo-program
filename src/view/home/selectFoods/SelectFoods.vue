<template>
<div>
  <div class="lunch-dinner" v-if="showFirst">
    <v-layout align-center justify-center @click="openLunch = true">
      점심!
    </v-layout>
    <v-layout align-center justify-center @click="openDinner = true">
      저녁!
    </v-layout>
  </div>
  <div v-if="openLunch" class="lunch">
    <h3 class="subtitle">점심</h3>
    <div>
      1. 싸고 가볍게
      <img src="../../../assets/lunch-easy.png"/>
    </div>
    <div>
      2. 적당히 저렴하고 배부르게
      <img src="../../../assets/lunch-cheap.png"/>
    </div>
    <div>
      3. 친구끼리 만났을때
      <img src="../../../assets/lunch-friends.png"/>
    </div>
    <div>
      4. 연인과 데이트
      <img src="../../../assets/lunch-couple.png"/>
    </div>
    <div>
      5. 대세는 혼밥
      <img src="../../../assets/lunch-solo.png"/>
    </div>
    <div>
      6. 비싸고 보장되는 곳
      <img src="../../../assets/lunch-expensive.png"/>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      name: "SelectFoods",
      data: function () {
        return {
          openLunch : false,
          openDinner : false,
        }
      },
      computed:{
        showFirst(){
          return !this.openLunch && !this.openDinner
        }
      },
      beforeDestroy(){
        this.initData();
      },
      methods:{
        initData(){
          this.openLunch = false;
          this.openDinner = false;
        },
        goSelectFoods(){
          this.$router.push("/selectFoods")
        },
        goWhoPay(){
          this.$router.push("/whoPay")
        },
        goMyInfo(){
          this.$router.push("/MyInfo")
        },
        showDevelopAlert(){
          alert("준비중입니다");
        }
      },
    }
</script>

<style scoped>
  .lunch-dinner{
    display: flex;
    flex-direction: row;

  }

  .lunch-dinner > div{
    min-width: 400px;
    min-height: 300px;
    border-radius: 5px;
    border: solid 2px #8d8d8d;
    font-size: 30px;
    cursor: pointer;
  }
  .subtitle{
    text-align: left;
    font-weight: 600;
    border-bottom: solid 1px #d1d1d1;
    padding-top: 16px;
    padding-left: 12px;
    padding-bottom: 16px;
  }
  .lunch{
    min-width: 700px;
    border-radius: 2px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
  }
  .lunch > div{
    border-bottom: solid 1px #d1d1d1;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    height: 100px;

  }
  .lunch > div:hover{
    background-color: cornflowerblue;
    color: white;
    cursor: pointer;
  }
  .lunch >div >img{
    width: 60px;
    height: 60px;
    float: right;
    margin-right: 16px;
  }
</style>

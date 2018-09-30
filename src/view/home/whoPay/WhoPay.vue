<template>
<div>
  <h2 class="bold"> 누가쏠까!</h2>
  <div v-if="showFirst">
    <div class="mt-4 mb-3">몇명 입니까?</div>
    <input class="memberCount" placeholder="0" type="number" v-model="memberCount">
    <button class="member-btn ml-2" @click="goSecond">입력</button>
  </div>
  <div v-else-if="showSecond">
    <div class="mt-4 mb-3">이름을 입력해 주세요</div>
    <div v-for="n in Number(memberCount)">
      {{n}}
      <input type="text" class="name-input" v-model="name[n-1]">
    </div>
    <button class="member-btn ml-4" @click="goThird">입력</button>
  </div>
  <div v-else-if="showThird">
    <h3 class="mt-4 mb-3 bod">오늘 쏠 사람은 </h3>
    <h1>{{this.name[randomNumber]}} !!</h1>
  </div>
</div>
</template>

<script>
    export default {
        name: "WhoPay",
      data: function () {
        return {
          memberCount: '',
          showSecond : false,
          showThird : false,
          name: [],
        }
      },
      computed:{
        showFirst(){
          return !this.showSecond && !this.showThird;
        },
        randomNumber(){
          return Math.floor(Math.random() * this.memberCount)
        }
      },
      created(){
        this.$eventBus.$on('whoPay',function(){
          this.memberCount = '';
          this.showSecond = false;
          this.showThird = false;
        });
      },
      methods:{
        goSecond(){
          if(this.memberCount<=0){
            alert("0보다 큰수를 입력해 주세요")
          }
          else{
            this.showSecond = true;
          }
        },
        goThird(){
          for(let i=0;i< Number(this.memberCount);i++){
            if(this.name[i] ===''|| this.name[i] ===undefined){
              alert((i+1)+"번째 칸이 비었습니다");
              return false;
            }
          }
            this.showThird = true;
            this.showSecond = false;
        }
      }
    }
</script>

<style scoped>
  .memberCount{
    border: 1px solid #8d8d8d;
    height: 40px;
    padding: 8px;
    font-size: 22px;
    width: 100px;

  }
  .name-input{
    margin-bottom: 8px;
    margin-left: 8px;
    border: 1px solid #8d8d8d;
    height: 40px;
    padding: 8px;
    font-size: 14px;
    width: 100px;
  }

  .member-btn{
    background-color: indigo;
    color: white;
    width: 80px;
    height: 40px;
    border-radius: 20px;
    margin-top: 8px;
  }
  .member-btn:hover{
    background-color: blueviolet;
  }
</style>

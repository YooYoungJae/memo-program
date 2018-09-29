<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
  import Home from './view/home/Home'
export default {
  name: 'App',
  components:{
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .mt-1{
    margin-top: 4px;
  }
.mt-2{
  margin-top: 8px;
}
.mt-3{
  margin-top: 12px;
}
.mt-4{
  margin-top: 24px;
}
.mt-5{
  margin-top: 32px;
}
.mt-6{
  margin-top: 48px;
}

.mb-1{
  margin-bottom: 4px;
}
.mb-2{
  margin-bottom: 8px;
}
.mb-3{
  margin-bottom: 12px;
}
.mb-4{
  margin-bottom: 24px;
}
.mb-5{
  margin-bottom: 32px;
}
.mb-6{
  margin-bottom: 48px;
}

.mr-1{
  margin-right: 4px;
}
.mr-2{
  margin-right: 8px;
}
.mr-3{
  margin-right: 12px;
}
.mr-4{
  margin-right: 24px;
}
.mr-5{
  margin-right: 32px;
}
.mr-6{
  margin-right: 48px;
}

.ml-1{
  margin-left: 4px;
}
.ml-2{
  margin-left: 8px;
}
.ml-3{
   margin-left: 12px;
 }
.ml-4{
  margin-left: 24px;
}
.ml-5{
  margin-left: 32px;
}
.ml-6{
  margin-left: 48px;
}

  /*padding*/
.pt-1{
  padding-top: 4px;
}
.pt-2{
  padding-top: 8px;
}
.pt-3{
  padding-top: 12px;
}
.pt-4{
  padding-top: 24px;
}
.pt-5{
  padding-top: 32px;
}
.pt-6{
  padding-top: 48px;
}

.pb-1{
  padding-bottom: 4px;
}
.pb-2{
  padding-bottom: 8px;
}
.pb-3{
  padding-bottom: 12px;
}
.pb-4{
  padding-bottom: 24px;
}
.pb-5{
  padding-bottom: 32px;
}
.pb-6{
  padding-bottom: 48px;
}

.pr-1{
  padding-right: 4px;
}
.pr-2{
  padding-right: 8px;
}
.pr-3{
  padding-right: 12px;
}
.pr-4{
  padding-right: 24px;
}
.pr-5{
  padding-right: 32px;
}
.pr-6{
  padding-right: 48px;
}

.pl-1{
  padding-left: 4px;
}
.pl-2{
  padding-left: 8px;
}
.pl-3{
  padding-left: 12px;
}
.pl-4{
  padding-left: 24px;
}
.pl-5{
  padding-left: 32px;
}
.pl-6{
  padding-left: 48px;
}

  /*color*/
.color-white{
  color: #ffffff;
}

  h1{
    font-size: 30px;
  }
h2{
  font-size: 24px;
  font-weight: 400;
}
h3{
  font-size: 20px;
  font-weight: 400;
}
h4{
  font-size: 18px;
  font-weight: 400;
}
h4a{
  font-size: 16px;
  font-weight: 400;
}
h5{
  font-size: 14px;
  font-weight: 400;
}
h6{
  font-size: 12px;
  font-weight: 400;
}

  /*cursor : pointer*/
  .cp{
    cursor: pointer
  }
  .bold{
    font-weight: 700;
  }
  .medium{
    font-weight: 500;
  }
  .t-left{
    text-align: left;
  }
  .t-center{
    text-align: center;
  }
  .t-right{
    text-align: right;
  }
  .color-lightblue{
    color: lightskyblue;
  }
  .color-purple{
    color: purple;
  }
  .d-flex{
    display: flex;
  }
  .d-inlineblock{
    display: inline-block;
  }
.d-inlineflex{
  display: inline-flex;
}

</style>

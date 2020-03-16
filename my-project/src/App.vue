<template>
  <div id="app">
    <h3> {{ mainTitle }} </h3>
    <router-view></router-view>
  </div>
</template>


<script>
import image from "./assets/logo.png"
//impoprt
// import FirstComponent from './components/FirstComponent.vue'

export default {

    data() {
      return {
          image,
          mainTitle:'This is main title',
          fisrtTitle:'This is dynamic title from app.vue',
          secondTitle:'First component second title',
          items:[],
      }
    },

    components : {

     
    },
    mounted() {
      this.$axios.get('https://api.github.com/users?since=135')
      .then((resp) => {
         this.items = resp.data;
      })
      .catch()
    }
}

</script>



<style scoped>
#mainWrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#mainWrap div{
  width: 200px;
  margin: 10px;
}
#mainWrap div img{
  width: 100%;
}
</style>
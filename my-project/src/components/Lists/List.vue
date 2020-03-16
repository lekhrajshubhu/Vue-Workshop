<template>
	<div id="userList">
		<div id="mainWrap">
			<div v-for="(user, index) in users" :key="index" class="userList">
				<div class="card">
				<img class="card-img-top" :src="'https://robohash.org/'+user.login" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">{{user.login}}</h5>
					<p class="card-text">{{user.type}}</p>
					<router-link class="btn btn-primary" :to="'/view/'+user.id">View</router-link>
				</div>
				</div>
			</div>
		</div>
    <router-view></router-view>
	</div>
</template>
<script>
import image from "../../assets/logo.png"

export default {

    data() {
      return {
          image,
          mainTitle:'This is main title',
          fisrtTitle:'This is dynamic title from app.vue',
          secondTitle:'First component second title',
          users:[],
      }
    },

    components : {

     
    },
    mounted() {
      this.$axios.get('https://api.github.com/users?since=135')
      .then((resp) => {
         this.users = resp.data;
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
#mainWrap itemList{
  width: 200px;
  margin: 10px;
}
#mainWrap div img{
  width: 100%;
}
</style>
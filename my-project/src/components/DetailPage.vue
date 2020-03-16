<template>
	<div id="detailPage">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque hic dignissimos. Nobis eum vero neque! Placeat qui tempora similique! Deserunt error sit id recusandae accusamus dignissimos sapiente assumenda earum!
	</div>
</template>
<script>
export default {
	data () {
		return {
			user:[],
		}
	},
	mounted() {
		this.getDetail();
	},
	methods: {
		getDetail() {
			this.$axios.get('https://api.github.com/users/'+this.$router.currentRoute.params.id)
      .then((resp) => {
		this.user = resp.data;
      })
      .catch()
		}
	}
}
</script>
<style scoped>

</style>
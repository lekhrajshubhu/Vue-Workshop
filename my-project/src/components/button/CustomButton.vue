<template>
	<div id="customButton">
		<button class="btn btn-sm" :class="btnClass" @on-handle-click="handleClick">
			<slot></slot>
		</button>
	</div>
</template>
<script>
export default {
	props:['btnClass'],
	methods :{
		handleClick() {
			return this.$emit('on-handle-click')
		}
	}
}
</script>
<style scoped>

</style>
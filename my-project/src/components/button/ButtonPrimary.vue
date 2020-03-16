<template>
	<div id="buttonPrimary">
		<custom-button btnClass="btn-primary" @on-handle-click="$emit('on-handle-click')">
			<slot></slot>
		</custom-button>
	</div>
</template>
<script>
export default {
	
}
</script>
<style scoped>

</style>
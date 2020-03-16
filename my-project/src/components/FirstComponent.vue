<template>
  <div id="firstComp">
      

	<div class="container-fluid">
    
    <p>{{ body }}</p>
		
	</div>
  </div>
</template>


<script>
export default {

	props:['title'],


    data() {
      return {
        body:'This is body of first component'
      }
    }
}

</script>



<style scoped>
</style>


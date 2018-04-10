<template>
  <div class="component">
    <div class="section">
      <div class="container">
        <p>
          Proin euismod elit non rhoncus efficitur. Curabitur sed lobortis leo, eget finibus tortor.
          <br>
          Mauris varius dignissim dignissim. Vivamus a bibendum ante, et pellentesque ligula.
        </p>
        <p>
          eyesopencure@gmail.com
        </p>
        <p>
          Proin euismod elit non rhoncus efficitur. Curabitur sed lobortis leo, eget finibus tortor.
          <br>
          Mauris varius dignissim dignissim. Vivamus a bibendum ante, et pellentesque ligula.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data: () => ({
		
	}),
	components: {
		
	},
	mounted(){
		
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.section{
	flex-grow: 1;
	z-index: 10;
}

.container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

p{
	margin: 1rem;
}
</style>
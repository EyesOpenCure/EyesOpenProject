<template>
  <div class="component">
    <div class="section">
      <div class="container">
        <p>
	  We are a group of internet volunteers from a diverse range of academic backgrounds, brought together by the common goal of treating blindness. We are not doing this because we expect that this will be an easy problem to solve, but rather because we think it is a worthwhile problem that deserves a fresh approach. We have new ideas, we are resourceful, and most of all we are very motivated.
	</p>
        <p>
	  Whether you have a background in biology, chemistry, physics, engineering, or even are just casually interested in the project, we would love your help. Let's do this together.
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

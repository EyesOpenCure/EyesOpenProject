<template>
  <div class="component">
    <div class="section">
      <div class="container">
        <p>
          We are a group of internet volunteers from a diverse range of academic backgrounds, brought together by the common goal of treating blindness.
        </p>
        <p>
          We are not doing this because we expect that this will be an easy problem to solve, but rather because we think it is a worthwhile problem that deserves a fresh approach.
        </p>
        <p>
          We are resourceful, we have new ideas, and most of all we are very motivated.
        </p>
        <p>
          Whether you have a background in biology, chemistry, physics, engineering, or even are just casually interested in the project, we would love your help.<br>
        </p>
        <p class="final-p">
          Let's cure blindness together.
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
	max-width: 800px;
	font-size: 1.125em;
	text-align: center;
}

p{
	color: $oc-gray-7;
	margin: 1rem;
}

.final-p{
	color: $oc-gray-9;
	font-weight: bolder;
}
</style>

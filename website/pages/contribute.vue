<template>
  <div class="component">
    <div class="section">
      <div class="container">
        <div class="content" v-html="tasksHTML"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data: () => ({
		tasksHTML: ""
	}),
	// TODO: this has to be changed. JS users still load marked and axios, even though the text has already been loaded by the server
	async asyncData (context) {
		const marked = require("marked")
		const axios = require("axios")
		let { data } = await axios.get("https://raw.githubusercontent.com/wiki/EyesOpenCure/EyesOpenProject/List-of-Open-and-Ongoing-Tasks.md")
		data = data.replace(/##/gi,"\n##") //HACK: current formatting in wiki is not 100% compatible with "marked" parsing
		return {tasksHTML: marked(data)}
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
	max-width: 800px;
}
/*
/deep/ .content{
  h1,h2,h3,h4,h5,h6{
    color: $oc-gray-2;
  }
  a{
    color: $oc-blue-4;
  }
}
*/
</style>
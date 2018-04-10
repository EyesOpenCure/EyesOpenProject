<template>
  <div class="component">
    <div class="section">
      <div class="container">
        <div class="git-link">
          <a href="https://github.com/EyesOpenCure/EyesOpenProject/blob/master/Whitepaper.md">This Whitepaper on GitHub</a>
          <hr>
        </div>
        <div class="content" v-html="whitepaperHTML"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data: () => ({
		whitepaperHTML : require("@/../Whitepaper.md")
	}),
	/*
	created(){
		fetch("https://raw.githubusercontent.com/EyesOpenCure/EyesOpenProject/master/Whitepaper.md")
			.then(res => res.text())
			.then(md => {
				this.whitepaperHTML = marked(md)
			})
	}
	*/
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.component{
	background: $oc-gray-0;
	font-family: "Raleway", sans-serif;
	color: $oc-gray-7;
}

.section{
	flex-grow: 1;
	text-align: left;
}

.container{
	max-width: 800px;
}

.git-link{
	font-family: monospace;
	font-size: 1.5rem;
}
</style>
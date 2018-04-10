<template>
  <div class="component">
    <div class="section">
      <div class="container">
        <a class="git-link" href="https://github.com/EyesOpenCure/EyesOpenProject/blob/master/Whitepaper.md">This Whitepaper on GitHub</a>
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

.section{
	flex-grow: 1;
	text-align: left;
}

.container{
	max-width: 864px;
}

.git-link{
	font-family: monospace;
	font-size: 1rem;
	@include tablet{
		padding: 1rem;
		margin: 1rem;
	}
}

.content{
	margin-top: 1rem;
	@include tablet{
		padding: 2rem;
		background: #fafafa;
		box-shadow: 0px 4px 12px rgba(0,0,0,0.25);
	}
}
</style>
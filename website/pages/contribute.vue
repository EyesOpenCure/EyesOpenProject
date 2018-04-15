<template>
  <div class="component">
    <div class="section">
      <div class="container">
        <div class="content" v-html="$store.state.tasksHTML"/>
      </div>
    </div>
</div></template>

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
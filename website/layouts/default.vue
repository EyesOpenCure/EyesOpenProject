<template>
  <div class="default-template">
    <ComponentNav/>
    <div class="router-wrapper">
      <nuxt keep-alive/>
    </div>
  </div>
</template>

<script>
export default{
	components:{
		ComponentNav: require("~/components/nav.vue").default
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.default-template {
  position: relative;
  min-height: 100vh;
  //font-family: "Raleway", sans-serif;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  //background: linear-gradient(60deg, #29323c 0%, #485563 100%);
  //background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
  //background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
  //background: $oc-gray-0;
  //background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  
  
  //background: #f0f0f0;
  background-attachment: fixed;
  color: $oc-gray-7;
  display: flex;
  flex-direction: column;
	overflow: hidden;
}

.router-wrapper{
  margin-top: 3rem;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.component{
	z-index: 10;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  //filter: blur(0);
}
</style>
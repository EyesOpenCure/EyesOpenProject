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
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
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
}
</style>
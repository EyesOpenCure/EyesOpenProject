<template>
  <div class="component">
    <div class="section">
      <div class="container">
        <p>
          Aenean eu euismod felis. Sed tincidunt neque vitae mi fringilla finibus. In convallis posuere libero, commodo placerat nulla dictum quis. Morbi eleifend quis enim sit amet commodo. Phasellus libero nulla, sodales a magna a, congue commodo felis. Quisque id gravida ipsum. Proin fringilla, lectus id feugiat varius, augue odio interdum orci, sed convallis erat quam quis sapien. Nam porttitor iaculis gravida. Aliquam et arcu viverra, condimentum arcu ac, accumsan nunc. Maecenas id felis ut tellus tincidunt interdum ut vel massa. Etiam malesuada faucibus sapien nec interdum. Mauris quis velit diam. Nullam varius vestibulum elit a auctor. Phasellus maximus ante nec commodo fermentum. Nunc consequat aliquam varius.
        </p>
        <p>
          Sed porta mattis dignissim. Vivamus bibendum nisl orci, et aliquet neque rhoncus a. Pellentesque aliquam rhoncus imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam pretium pulvinar arcu, iaculis scelerisque mauris hendrerit sit amet. Ut mollis tortor sed tortor volutpat, non tempor nunc blandit. Nullam sapien diam, malesuada tempor tincidunt auctor, scelerisque sed odio. Fusce at molestie odio. Nullam volutpat, ipsum a malesuada blandit, nulla lectus hendrerit libero, ut rutrum metus nisi at felis. In blandit turpis sit amet ex lobortis dapibus. Mauris lacinia pellentesque mauris in eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent condimentum et quam at semper. 
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
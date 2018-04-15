<template>
  
  <div :class="{'scrolled' : scrollPos}" class="component-nav">
    <div class="container">
      <!--<img class="logo" src="http://via.placeholder.com/350x150?text=Placeholder">-->
      <nuxt-link :to="'/'" class="logo-and-project-name">
        <img class="logo" src="~assets/images/eye.svg">
        <div class="project-name">OpenEYS</div>
      </nuxt-link>
      <div class="nav-spacer"/>
      <div :class="{'is-active' : showTouchNav}" class="navbar-burger" @click="showTouchNav = !showTouchNav">
        <span/>
        <span/>
        <span/>
      </div>
      <div :class="{showTouchNav}" class="router-links" @click="showTouchNav = false">
        <nuxt-link :to="'/'"><span class="link-text">Home</span></nuxt-link>
        <nuxt-link :to="'/whitepaper'"><span class="link-text">Whitepaper</span></nuxt-link>
        <nuxt-link :to="'/contribute'"><span class="link-text">Contribute</span></nuxt-link>
        <nuxt-link :to="'/contact'"><span class="link-text">Contact</span></nuxt-link>
        <nuxt-link :to="'/about'"><span class="link-text">About Us</span></nuxt-link>
      </div>
    </div>
  </div>
	
</template>

<script>
export default {
	data: () => ({
		showTouchNav: false,
		scrollPos : 0
	}),
	/*
	watch: {
		'$route' () {
			this.showTouchNav = false
		}
	}
	*/
}
</script>

<style scoped lang="scss">
@import "~assets/css/variables.scss";

.component-nav{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 3rem;
	z-index: 99;
	//background: rgba(78, 131, 151,0.85);
	background: #52667a;
	//background: $oc-gray-4;
	color: $oc-gray-2;
	padding: 0rem;
	box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
}

.container{
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	@include touch{
		padding: 0 0 0 1rem;
	}
}

.logo-and-project-name{
	width: auto !important; //sorry
	height: 100%;
	filter: drop-shadow(0px 0px 8px rgba(0,0,0,0.5));
	display: flex;
	justify-content: flex-start;
}

.logo{
	height: 100%;
	object-fit: contain;
	object-position: left center;
	filter: invert(1);
}

.project-name{
	font-weight: 500;
	font-size: 1.5rem;
	margin-left: 0.5rem;
	color: $oc-gray-0;
}

.nav-spacer{
	flex-grow: 1;
	height: 100%;
}

.router-links{
	@include desktop{
		position: relative;
		display: flex;
		align-items: center;
		height: 100%;
	}
	@include touch{
		padding-top: 1rem;
		z-index: -10;
		position: absolute;
		right: 0;
		top: 100%;
		width: 100%;
		height: calc(100vh - 3rem);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		background: rgba(82, 102, 122,1);
		//box-shadow: 0px 4px 8px rgba(0,0,0,0.5);
		transform: translateY(-100%);
		transition: transform 0.25s ease-in;
		&.showTouchNav{
			transition: transform 0.25s ease-out;
			//display:flex;
			transform: translateY(0);
		}
	}
}

a{
	position: relative;
	display: flex;
	align-items: center;
	color: $oc-gray-4;
	padding: 0 2rem;
	transition: all 0.25s ease;

	@include desktop{
		height: 100%;
	}

	@include touch{
		padding: 0.5rem 1.5rem;
		width: 100%;
		justify-content: flex-end;
		&:focus{
			outline: 0;	
		}
	}

	>.link-text{
		position: relative;
		font-size: 1.25rem;
		line-height: 1;
		@include touch{
			font-size: 1.5rem;
			font-weight: lighter;
		}
		&::after{
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			top: 100%;
			left: 0;
			@include touch{
				width: 8px;
				height: 8px;
				top: calc(50% - 4px);
				left: -16px;
				border-radius: 50%;
			}
			background: $oc-gray-0;
			opacity: 0;
			transition: opacity 0.25s ease;
		}
	}
}

.router-links>a.nuxt-link-exact-active{
		color: $oc-gray-0;
		>.link-text::after{
			opacity: 1;
			transition: opacity 1s ease;
			@include touch{
				transition: opacity 0.3s ease;
			}
		}
	}

</style>
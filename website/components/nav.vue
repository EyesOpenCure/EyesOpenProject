<template>
  
  <div :class="{'scrolled' : scrollPos}" class="component-nav">
    <div class="container">
      <div :class="{'is-active' : showTouchNav}" class="navbar-burger" @click="showTouchNav = !showTouchNav">
        <span/>
        <span/>
        <span/>
      </div>
      <nuxt-link :to="'/'" :class="{'is-hidden-touch' : this.$route.name == 'index'}" class="logo-and-project-name">
        <div class="project-name">OpenEYS</div>
      </nuxt-link>
      <div class="nav-spacer"/>

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
//const navEl = document.querySelector(".component-nav")
export default {
	data: () => ({
		showTouchNav: false,
		scrollPos : 0
	}),
	methods: {
		setLinkColor (routeName = this.$route.name){
			if(routeName == "index"){
				this.$el.style.setProperty("--inactive-color",getComputedStyle(this.$el).getPropertyValue("--inactive-color--dark"))
				this.$el.style.setProperty("--active-color",getComputedStyle(this.$el).getPropertyValue("--active-color--dark"))
			}else{
				this.$el.style.setProperty("--inactive-color",getComputedStyle(this.$el).getPropertyValue("--inactive-color--light"))
				this.$el.style.setProperty("--active-color",getComputedStyle(this.$el).getPropertyValue("--active-color--light"))
			}
		}
	},
	mounted(){
		this.setLinkColor()
		window.addEventListener("scroll", e => {
			this.scrollPos = window.scrollY
		})
	},
	watch: {
		'$route' (to) {
			this.setLinkColor(to.name)
		}
	},
}
</script>

<style scoped lang="scss">
@import "~assets/css/variables.scss";

.component-nav{
	--inactive-color--dark: #ced4da; //4
	--active-color--dark: #f8f9fa; //0

	--inactive-color--light: #868e96; //6
	--active-color--light: #495057; //7

	--inactive-color: #aaa;
	--active-color: #aaa;
	//border-bottom: 1px solid rgba(128,128,128,0.75);
	//filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.25));
}

.component-nav{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 3rem;
	z-index: 99;
	background: transparent;
	padding: 0rem;
	transition: all 0.5s ease;
}

.scrolled{
	background: $oc-gray-0;
	//box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
	//border-bottom: 1px solid #aaa;
}

.container{
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	width: 100%;
	max-width: 1920px;
}

.navbar-burger>span{
	background: var(--active-color);
}

.logo-and-project-name{
	width: auto !important; //sorry
	height: 100%;
	display: flex;
	justify-content: flex-start;
	>.project-name{
		font-weight: 300;
		font-size: 1.5rem;
		padding: 0 1rem;
		color: var(--active-color);
		transition: color 1s ease;
	}
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
		font-weight: 500;
	}
	@include touch{
		z-index: -10;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		left: 0;
		//top: calc(100% + 3rem);
		top: 100%;
		//height: calc(100vh - 3rem);
		padding: 1rem 0;

		//background: rgba(82, 102, 122,1);
		background: rgba(255,255,255,0.95);
		transform: translateX(-100%);
		transition: transform 0.25s ease-in, box-shadow 0.5s ease;
		&.showTouchNav{
			transition: transform 0.25s ease-out;
			transform: translateX(0);
			box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
		}
	}
}

a{
	position: relative;
	display: flex;
	align-items: center;
	color: var(--inactive-color);
	padding: 0 1rem;
	line-height: 1;

	@include desktop{
		height: 100%;
	}

	@include touch{
		padding: 0;
		justify-content: flex-start;

		color: var(--active-color--light) !important;
		
		font-size: 1rem;
		>.link-text{
			padding: 1rem 4rem 1rem 2rem;
		}
		&:focus{
			outline: 0;	
		}
	}

	>.link-text{
		position: relative;
		transition: color 1s ease;
		&::after{
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			top: calc(100% + 2px);
			left: 0;
			transition: all 1s ease;
			background-color: var(--inactive-color);
			opacity: 0;
			@include touch{
				width: 4px;
				height: 100%;
				top: 0;
				left: 0;
				background-color: var(--active-color--light);
			}
		}
	}
}

.router-links>a.nuxt-link-exact-active{
	color: var(--active-color);
	>.link-text::after{
		opacity: 1;
	}
}

</style>
<template>
  <div class="component">

    
    <div class="background"/>
    <div class="background-rainbow"/>

    <div class="section">
      <div class="project">
        <!--<img class="logo is-hidden-mobile" src="http://via.placeholder.com/512x256?text=Placeholder">-->
        <div class="project-text">
          <div class="project-text__title">
            OpenEYS Project
          </div>
          <div class="project-text__subtitle">
            Ocular EYS Replacement for RP25<br> and Other Retinal Diseases
          </div>
        </div>
      </div>
      
      <hr class="is-hidden-tablet">
      <div class="info-entry has-text-right-tablet has-text-centered-mobile">
        <div class="info-entry__text">
          <div class="info-entry__text-headline">
            EYS is an extracellular protein
          </div>
          <div class="info-entry__text-description">
            <ul>
              <li>Nonfunctional EYS leads to blindness (RP25).</li>
              <li>We plan to grow EYS in modified cell cultures.</li>
              <li>The protein can then be injected into the eye.</li>
            </ul>
          </div>
        </div>
        <img class="info-entry__image is-hidden-mobile" src="https://via.placeholder.com/256x256?text=Placeholder">
      </div>
      <hr class="is-hidden-tablet">
      <div class="info-entry has-text-centered-mobile">
        <img class="info-entry__image is-hidden-mobile" src="https://via.placeholder.com/256x256?text=Placeholder">
        <div class="info-entry__text">
          <div class="info-entry__text-headline">
            EYS is a growth factor
          </div>
          <div class="info-entry__text-description">
            <ul>
              <li>EYS belongs to a class of wound-healing growth factors.</li>
              <li>These proteins can profoundly regenerate tissue after injury.</li>
              <li>We hope to show retinal tissue regeneration beyond RP25.</li>
            </ul>
          </div>
        </div>
      </div>
			
    </div>


  </div>
</template>

<script>
export default {
	data: () => ({
		lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum ligula ac sodales facilisis. Mauris hendrerit eros vel rhoncus viverra. Proin in lorem lectus."
	}),
	components: {
		
	},
	mounted(){
		
	}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.component{
	position: relative;
}

.background{
	z-index: 5;
	position: absolute;
	background-image: url("~assets/images/eye_cropped_gray_alpha_contrast_tiny.jpg");
	
	//background: linear-gradient(90deg,transparent,#111);
	background-size: cover;
	background-position: top left;
	//background-origin: top left;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	filter: opacity(0.33) brightness(0.25) contrast(1.25);
}

.background-rainbow{
	z-index: 6;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(120deg, red 5%, orange , yellow, green, blue, indigo 80%);
	background-size: cover;
	background-position: top left;
	filter: opacity(0.05) brightness(1);
}

.section{
	position: relative;
	flex-grow: 1;
	display: flex;
	z-index: 10;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.project{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1rem;
	text-align: center;
	//background: url("~static/patrick-brinksma-382458-unsplash.jpg");
	background-size: cover;
	background-position: right center;
	.logo{
		width: 520px;
		object-fit: contain;
		margin: 1rem 0;
	}
	.project-text{
		display: flex;
		flex-direction: column;
		align-items: center;
		//filter: drop-shadow(0px 4px 4px rgba(0,0,0,.25));
		&__title{
			//background: white;
			font-family: "Raleway";
			font-weight: 300;
			@include mobile{
				font-size: 2rem;
			}
			@include tablet{
				font-size: 3rem;
			}
			@include desktop{
				font-size: 4rem;
			}
			//color: $oc-gray-7;
			//color: hsl(196, 32%, 25%);
			//padding: 0.5rem 1rem;
			//text-shadow: 0px 4px 8px rgba(0,0,0,0.25);
		}
		&__subtitle{
			color: #4e8397;
			color: rgb(159, 204, 219);
			opacity: 1;
			@include mobile{
				font-size: 1rem;
			}
			@include tablet{
				font-size: 1.5rem;
			}
			@include desktop{
				font-size: 2rem;
			}
		}
	}
}

hr{
	width: 256px;
	max-width: 80%; 
	margin: 0 0;
}

.info-entry{
	display: flex;
	align-items: center;
	max-width: 800px;
	margin: 1rem 0;
	//font-family: "Segoe UI";
	//font-weight: 500;
	//line-height: 2;
	>.info-entry__text{
		>.info-entry__text-headline{
			//font-size: 2rem;
			@include mobile{
				font-size: 1.5rem;
			}
			@include tablet{
				font-size: 1.5rem;
			}
			@include desktop{
				font-size: 2rem;
			}
		}
		>.info-entry__text-description{
			//font-size: 1rem;
			@include mobile{
				font-size: 1rem;
				line-height: 1.5;
			}
			@include tablet{
				font-size: 1rem;
				line-height: 2;
			}
			@include desktop{
				font-size: 1rem;
			}
		}
	}
	>.info-entry__image{
		margin: 0 2rem;
		width: 256px;
		height: 256px;
		object-fit: cover;
		opacity: 0.5;
	}
}
</style>

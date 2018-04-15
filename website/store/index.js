import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			tasksHTML: "123"
		},
		mutations: {
			increment (state) {
				state.counter++
			}
		},
		actions: {
			async nuxtServerInit(storeContext,nuxtContext) {
				const marked = require("marked")
				const axios = require("axios")
        
				let {data} = await axios.get("https://raw.githubusercontent.com/wiki/EyesOpenCure/EyesOpenProject/List-of-Open-and-Ongoing-Tasks.md")
				data = data.replace(/##/gi,"\n##") //HACK: current formatting in wiki is not 100% compatible with "marked" parsing
				data = marked(data)
				storeContext.state.tasksHTML = data
			}
		}
	})
}

export default createStore
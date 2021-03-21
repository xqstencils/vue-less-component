import Vue from 'vue'
import App from './App.vue'
import Hello from '../src'

Vue.use(Hello)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

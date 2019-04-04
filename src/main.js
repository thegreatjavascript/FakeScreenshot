// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Dialog, Icon, Card, Upload, Slider } from 'element-ui'
import './icons'

Vue.use(Button)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Upload)
Vue.use(Slider)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

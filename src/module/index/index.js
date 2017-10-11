// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from '@/components/Index'
// import YDUI from '@/ydui/ydui'
import { flexible } from '@/ydui/ydui.flexible'
import fastclick from 'fastclick'

flexible()
fastclick.attach(document.body)
// Vue.use(YDUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index }
})

window.apiready = function () {
  api.alert({
    msg: 'sdsadasdasdsa'
  })
}


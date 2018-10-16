// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'

import App from './App'

Vue.config.productionTip = false

Vue.use(VueOnsen);

const asyncOperation = new Promise((res, rej) => {
  setTimeout(() => {
    res()
  }, 2000)
})

asyncOperation
  .then(() => {

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      render: h => h(App),
      components: { App },
      template: '<App/>'
    })
  })

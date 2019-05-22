import Vue from 'vue'
import Router from 'vue-router'
import unsubscribe from './views/unsubscribe.vue'
import redirect from './views/redirect.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/u/:email',
      name: 'unsubscribe',
      component: unsubscribe
    },
    {
      path: '*',
      name: 'redirect',
      component: redirect
    }
  ]
})

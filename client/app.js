const Vue = require('vue');
const VueRouter = require('vue-router');
const VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: '/search',
    component: require('./search/search.vue'),
    name: 'Search'
  }
];

const router = new VueRouter({
  routes,
  history: true
});

router.push('/search');

const App = new Vue({
  router
}).$mount('#app');

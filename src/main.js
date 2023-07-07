import Vue from 'vue'
import App from './App.vue'
import {hello, bye} from './constants';
import showMessage from './utils';

showMessage(hello);
showMessage(bye);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

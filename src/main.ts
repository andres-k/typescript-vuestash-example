import * as Vue from 'vue';
import { AppComponent } from './components/app/';

// Vue.use(Stash);

new Vue(new AppComponent()).$mount('#app');

// new Vue({
//   el: '#app',
//   template: "<app></app>",
//   // render: h => h(AppComponent)
// })

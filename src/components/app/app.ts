import * as Vue from 'vue';
import { Component } from 'vue-typed'
// import * as appTemplate from './app.html';

@Component({
  // template: appTemplate,
  // template: require('./app.html')
  template: "<p>asdads</p>"
})
export class AppComponent extends Vue {
  randomText: string = "asdads";

  mounted(): void {
    console.log("afdsf");
  } 
}
import Vue from 'nativescript-vue';

import { getExamples } from './examples';
import * as views from './views';

import RadAutoComplete from 'nativescript-ui-autocomplete/vue';
import { setCssFileName } from "tns-core-modules/application";
setCssFileName("app.css");

Vue.use(RadAutoComplete);

for (let comp of getExamples()) {
  Vue.component(comp.name, comp);
}

Vue.component(views.Home.name, views.Home);

// Vue.config.silent = false;

new Vue({
  template: `
    <Frame>
      <Home />
    </Frame>
  `
}).$start();

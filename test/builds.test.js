//import Vue from "vue";
var builds = require("/home/esioci-ui/app.js")
describe("Builds", function() {
  it("test render builds", function() {
    const vm = new Vue({
      template: '<div id="esioci"><builds></builds></div>',
      components: { 'builds': builds }
    }).$mount()
    expect(1,1);
  });
});
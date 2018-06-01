var Vue = require("vue");

var vm = new Vue({
  el: "#app",
  components: {
    "datetime": require("./demo.vue")
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  array: [],
  actions: {
    prevParam() {
      alert(this.get('param'));
    },
    problemSelected() {
      alert(this.get('selected'));
    },
    selectWeather(choice) {
      this.set('selected', choice);
    },
    nextPage(){
      if (this.get('selected') !== null){
      let paramArr = this.get('param');
      this.set('array', [paramArr[0],
        paramArr[1],
        this.get('selected')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-speed').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
    }
  }
});

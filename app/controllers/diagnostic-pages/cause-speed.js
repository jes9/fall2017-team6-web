import Ember from 'ember';

export default Ember.Controller.extend({
  speed: 50,
  rpm: 0,
  array: [],
  actions: {
    problemSelected() {
      alert(this.get('speed'));
      alert(this.get('rpm'));
    },
    selectSpeed(choice) {
      this.set('speed', choice);
    },
    selectRpm(choice) {
      this.set('rpm', choice);
    },
    nextPage(){
      this.set('array', [this.get('param'), this.get('speed'), this.get('rpm')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-engine').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});

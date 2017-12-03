import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  array: [],
  actions: {
    problemSelected() {
      alert(this.get('selected'));
    },
    selectEngine(choice) {
      this.set('selected', choice);
    },
    nextPage(){
      this.set('array', [this.get('param'), this.get('selected')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-driving').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});

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
    selectProblem(choice) {
      this.set('selected', choice);
    },
    nextPage(){
      this.set('array', [this.get('param'), this.get('selected')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-temperature').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});

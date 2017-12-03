import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  array: [],
  actions: {
    problemSelected() {
      alert(this.get('selected'));
    },
    selectRo(choice) {
      this.set('selected', choice);
    },
    nextPage(){
      this.set('array', [this.get('param'), this.get('selected')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-fuel').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});

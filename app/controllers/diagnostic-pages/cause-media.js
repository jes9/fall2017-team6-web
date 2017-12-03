import Ember from 'ember';

export default Ember.Controller.extend({
  array: [],
  actions: {
    nextPage(){
      this.set('array', [this.get('param')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.form-review').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});

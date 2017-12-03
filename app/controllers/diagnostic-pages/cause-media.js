import Ember from 'ember';

export default Ember.Controller.extend({
  array: [],
  actions: {
    nextPage(){
      let paramArr = this.get('param');
      this.set('array', [paramArr[0],
        paramArr[1],
        paramArr[2],
        paramArr[3],
        paramArr[4],
        paramArr[5],
        paramArr[6],
        paramArr[7],
        paramArr[8],
        paramArr[9],
        paramArr[10],
        paramArr[11]]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.form-review').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    prevParam() {
      alert(this.get('param'));
    },
    nextPage(){
      this.transitionToRoute('diagnostic-pages.form-submitted');
    }
  }
});

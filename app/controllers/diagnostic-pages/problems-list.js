import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  actions: {
    problemSelected() {
      alert(this.get('selected'));
    },
    selectProblem(choice) {
      this.set('selected', choice);
    }
  }
});

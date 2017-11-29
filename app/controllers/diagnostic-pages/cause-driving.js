import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  actions: {
    problemSelected() {
      alert(this.get('selected'));
    },
    selectDrive(choice) {
      this.set('selected', choice);
    }
  }
});

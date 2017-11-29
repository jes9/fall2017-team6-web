import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  actions: {
    carSelected() {
      alert(this.get('selected'));
    },
    selectCar(choice) {
      this.set('selected', choice);
    }
  }
});

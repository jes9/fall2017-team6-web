import Ember from 'ember';

export default Ember.Controller.extend({
  speed: 50,
  rpm: 0,
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
    }
  }
});

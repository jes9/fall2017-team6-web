import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      var username = this.get('username');
      var password = this.get('password');
      alert(this.get('username'));
      alert(this.get('password'));
    }
  }
});

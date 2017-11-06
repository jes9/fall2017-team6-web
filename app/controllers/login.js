import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      var username = this.get('username');
      var password = this.get('password');
      alert(username);
      alert(password);
    }
  }
});

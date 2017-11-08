import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      if (this.get('username')=='user') {
        if (this.get('password')=='pass') {
          this.transitionToRoute('dashboard');
        }
         else {
           alert('Incorrect password.');
         }
      } else {
        alert('Incorrect username/password combination.');
      }
    }
  }
});

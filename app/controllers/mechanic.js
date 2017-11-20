import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goBack (){
      this.transitionToRoute('dashboard');
    },
    signOut () {
      this.get ('gatekeeper').signOut ().then (() => {
        this.replaceRoute ('sign-in');
      });
    }
  }
});

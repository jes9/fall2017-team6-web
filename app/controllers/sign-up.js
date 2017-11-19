import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createAccount () {
      if(!this.get('acceptTerms')){
        alert('CheckBox');
      } else{
      let {username, password, email} = this.getProperties (['username', 'password', 'email']);
      alert(username);
      let account = this.get ('store').createRecord ('account', {username, password, email});
      //let adapterOptions = {signIn: true};

      //account.save ({adapterOptions}).then (account => {
      account.save ().then (() => {
        this.transitionToRoute('sign-in');
      //}).catch (reason => {
        //alert('Test');
      });
    }
  }
  }

});

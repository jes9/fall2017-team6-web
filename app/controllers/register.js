import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createAccount () {
      let {email, password, confirm_password} = this.getProperties (['email', 'password', 'confirm_password']);
      let form1 = this.get ('store').createRecord ('account', {email, password, confirm_password});
      let adapterOptions = {signIn: true};
      
      form1.save ({adapterOptions}).then (form1 => {
        // You can transition to a protected application route
        this.transitionToRoute('personal-info');
      }).catch (reason => {
        // Display error message to user
      });
    }
  }
});
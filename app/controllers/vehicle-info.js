import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createAccount() {
      let {make, model, year, miles} = this.getProperties (['make', 'model', 'year', 'miles']);
      let register = this.get ('store').createRecord ('account', {make, model, year, miles});
      let adapterOptions = {signIn: true};
      
      register.save ({adapterOptions}).then (register => {
        // You can transition to a protected application route
        this.transitionToRoute('dashboard');
      }).catch (reason => {
        // Display error message to user
      });
    }
  }
});

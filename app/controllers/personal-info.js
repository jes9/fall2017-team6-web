import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createAccount() {
      let {first_name, last_name, gender, age, phone_number} = this.getProperties (['first_name', 'last_name', 'gender', 'age', 'phone_number']);
      let register = this.get ('store').createRecord ('account', {first_name, last_name, gender, age, phone_number});
      let adapterOptions = {signIn: true};
      
      register.save ({adapterOptions}).then (register => {
        // You can transition to a protected application route
        this.transitionToRoute('vehicle-info');
      }).catch (reason => {
        // Display error message to user
      });
    }
  }
});
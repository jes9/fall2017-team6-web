import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  actions: {
    //carSelected() {
      //alert(this.get('selected'));
    //},
    selectCar(choice) {
      this.set('selected', choice);
    },
    carSelected() {
      let user = this.get('store').findRecord('user', 1);
      /*let {carmodel} = this.get('selected');
      let form = this.get ('store').createRecord ('form', {carmodel});
      //let adapterOptions = {signIn: true};

      user.get('form').pushObject(form);
      //account.save ({adapterOptions}).then (account => {
      form.save ().then (() => {
      //this.transitionToRoute('dashboard');
        user.save();
        alert('NotError');
      }).catch (reason => {
        alert('Error');
      });
    */
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  array: [],
  actions: {
    //carSelected() {
      //alert(this.get('selected'));
    //},
    selectCar(choice) {
      this.set('selected', choice);
      //alert(this.get('selected'));
    },
    carSelected() {
      this.set('array', ['Test3', 'Test2', 'Test']);
      alert(this.array[0]);
      //alert(var1);
      //alert(var3);
      //var form = this.get('store').createRecord('form');
    //  form.set('carmodel', 'Test');
      //alert(this.form.carmodel);
      /*
      let user = this.get('store').findRecord('user', 1);
      //alert(user.username);
      let carmodel = this.get('selected');
      let form = this.get ('store').createRecord('form', {carmodel});
      //let adapterOptions = {signIn: true};

      //user.get('form').pushObject(form);
      //account.save ({adapterOptions}).then (account => {
      form.save().then (() => {
      //this.transitionToRoute('dashboard');
        user.save();
        alert('NotError');
      });
      /*.catch (reason => {
        alert('Error');
      });
    */
    },
    nextPage(){
      if (this.get('selected') !== null){
        this.set('array', [this.get('selected')]);
        let param = this.array;
        this.transitionToRoute('diagnostic-pages.problems-list').then(function(newRoute){
          newRoute.controller.set('param',param);
        });
      }
    }
  }
});

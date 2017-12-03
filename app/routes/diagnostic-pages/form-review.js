import Ember from 'ember';

export default Ember.Route.extend({
  array: [],
  beforeModel() {
    Ember.run.later((function() {
//do something in here that will run in 2 seconds
}), 2000);
  },
  model() {
    /*
    let form = { carmodel: '',
      carimage: '',
      carid: '',
      driving: '',
      engine: '',
      fuel: '',
      ro: '',
      speed: '',
      rpm: '',
      temp: '',
      when: '',
      problem: '',
      other1: '',
      other2: ''};
    return form;
    */
    return this.get('store').findRecord('form', 1);
  },
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('diagnostic-pages');
    //return this.get('store').findAll('car');
  }
});

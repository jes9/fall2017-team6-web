import DS from 'ember-data';

export default DS.Model.extend({
  carmake: DS.attr(),
  carmodel: DS.attr(),
  carmiles: DS.attr(),
  caryear: DS.attr(),
  carimage: DS.attr()
});

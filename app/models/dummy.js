import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  email:  DS.attr()
});

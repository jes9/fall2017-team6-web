import DS from 'ember-data';

export default DS.Model.extend({
  carimage: DS.attr(),
  carmodel: DS.attr(),
  carid: DS.attr(),
  driving: DS.attr(),
  engine: DS.attr(),
  fuel: DS.attr(),
  ro: DS.attr(),
  speed: DS.attr(),
  rpm: DS.attr(),
  temp: DS.attr(),
  when: DS.attr(),
  problem: DS.attr(),
  other1: DS.attr(),
  other2: DS.attr(),
  /*
  user: DS.belongsTo('user')
  */
});

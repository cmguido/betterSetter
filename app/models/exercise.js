import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  workout: DS.attr('string'),
  amount: DS.attr('string'),
  reps: DS.attr('string'),
  time: DS.attr('string'),
  user: DS.belongsTo('user')
});

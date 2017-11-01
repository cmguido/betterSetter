import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  exercises: DS.hasMany('exercise')
});

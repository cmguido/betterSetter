import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
editWorkout (exercise) {
  console.log(this);
  console.log(this.get('exercise'));
  // this.set('exercise', this.get('exercise'));
  this.sendAction('editWorkout', this.get('exercise'));
  this.set('exercise');
    }
  }
});

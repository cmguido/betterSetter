import Ember from 'ember';

export default Ember.Component.extend({
newWorkout: {
  date: null,
  workout: null,
  amount: null,
  reps: null,
  time: null,
  hidden: false
},
actions: {
  createWorkout(exercise) {
    this.sendAction('createWorkout', this.get('newWorkout'));
    this.set('newWorkout');
  },
}
});

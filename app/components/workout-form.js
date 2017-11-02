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
  createWorkout() {
    this.sendAction('createWorkout', this.get('newWorkout'));
    return this.set([['newWorkout.date', null], ['newWorkout.workout', null], ['newWorkout.amount', null], ['newWorkout.reps', null], ['newWorkout.time', null]]);
    console.log(newWorkout)
  },
}
});

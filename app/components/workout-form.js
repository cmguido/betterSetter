import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),

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
   this.set('newWorkout', null)
    // .then(() => this.get('flashMessages').success('Workout created!'))
  },
}
});

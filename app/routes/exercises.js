import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model () {
    return this.get('store').findAll('exercise');
  },
  actions: {
    createWorkout (exercise) {
      let newWorkout = this.get('store').createRecord('exercise', exercise);
      newWorkout.save()
      .then(() => this.get('flashMessages').success('Workout created!'))
      .catch(() => this.get('flashMessages').danger('There was a problem. Please try again.'))
    },
    deleteWorkout(exercise) {
      // console.log('exercise is ', exercise)
      exercise.destroyRecord()
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log(this.get('store').findAll('exercise'));
    return this.get('store').findAll('exercise');
  },
  actions: {
    createWorkout (exercise) {
      let newWorkout = this.get('store').createRecord('exercise', exercise);
      newWorkout.save();
    },
    deleteWorkout(exercise) {
      console.log('exercise is ', exercise)
      exercise.destroyRecord();
    }
  }

});

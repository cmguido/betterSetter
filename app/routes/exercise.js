import Ember from 'ember';

  export default Ember.Route.extend({
    model (params) {
    return this.get('store').findRecord('exercise', params.exercise_id);
  },
  actions: {
    deleteWorkout() {
      let exercise = this.currentModel
          exercise.destroyRecord()
            .then(() => this.transitionTo('exercises'))
            .then(() => this.get('flashMessages').success('Workout deleted'))
            .catch(() => this.get('flashMessages').danger('There was a problem. Please try again.'))
      },
      editWorkout () {
        let exercise = this.currentModel
        exercise.save()
        .then(() => this.get('flashMessages').success('Workout edited'))
        .catch(() => this.get('flashMessages').danger('There was a problem. Please try again.'))
  }
}
});

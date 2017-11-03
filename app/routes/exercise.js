import Ember from 'ember';

  export default Ember.Route.extend({
    model (params) {
    return this.get('store').findRecord('exercise', params.exercise_id);
  },
  actions: {
    deleteWorkout() {
      let exercise = this.currentModel
          exercise.destroyRecord()
            .then(() =>
              this.transitionTo('exercises'));
      },
      editWorkout () {
        let exercise = this.currentModel
    exercise.save();
  }
}
});

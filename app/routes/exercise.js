import Ember from 'ember';

  export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

    model (params) {
    return this.get('store').findRecord('exercise', params.exercise_id);
  },
  actions: {
    deleteWorkout() {
      let exercise = this.currentModel
          exercise.destroyRecord()
            .then(() => this.transitionTo('exercises'));
      //         .then(() => {
      //           this.get('flashMessages');
      //           .success('Workout deleted.');
      //         })
      //         .catch(() => {
      //           this.get('flashMessages');
      //           .danger('There was a problem. Please try again.');
      //         });,
      },
      editWorkout () {
        // console.log('old date is', this.currentModel._internalModel.__data.date);
        let exercise = this.currentModel
        // console.log(exercise.date)
    exercise.save();
  }
}
});

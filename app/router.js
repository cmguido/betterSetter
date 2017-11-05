import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  // this.route('users');
  this.route('exercises');
  this.route('about');
  this.route('exercise', { path: 'exercises/:exercise_id' });
  this.route('search');
  // this.route('search', { path: 'exercises/search' });
});

export default Router;

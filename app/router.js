import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('soft-furniture');
  this.route('sofas');
  this.route('info', {path: '/sofas/:id'});
});

import {RouterConfiguration, NavigationInstruction, Redirect, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Sandbox';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: ['/', 'home'], name: 'home', moduleId: 'home/index' },
      { route: '404', name: '404', moduleId: '404/index' },
      { route: 'login', name: 'login', moduleId: 'login/index' },
      { route: 'logout', moduleId: 'logout/index', nav: true, title: 'Logout' }
    ]);

    let handleUnknownRoutes = (instruction: NavigationInstruction) => {
      this.router.navigate('');
    };

    config.mapUnknownRoutes(handleUnknownRoutes.bind(this, NavigationInstruction));
  }

  activate(options: Object): void {
    console.log(options);
  }
}

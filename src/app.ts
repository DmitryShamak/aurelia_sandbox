import {RouterConfiguration, NavigationInstruction, Redirect, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Sandbox';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: ['/', 'home'], name: 'home', moduleId: 'resources/pages/home/index' },
      { route: '404', name: '404', moduleId: 'resources/pages/404/index' },
      { route: 'login', name: 'login', moduleId: 'resources/pages/login/index' },
      { route: 'logout', moduleId: 'resources/pages/logout/index', nav: true, title: 'Logout' }
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

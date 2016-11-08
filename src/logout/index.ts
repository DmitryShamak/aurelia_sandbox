import {Router} from "aurelia-router";
import {inject} from "aurelia-framework";

@inject(Router)
export class Logout {
  router: Router;
  message: string = "Logout";

  constructor(router: Router) {
    this.router = router;
  }

  activate() {
    this.router.navigate("login");
  }
}

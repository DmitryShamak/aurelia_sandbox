import {Router} from "aurelia-router";

export class Logout {
  message: string = "Logout";

  activate() {
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  }
}

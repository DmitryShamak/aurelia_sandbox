export class Logout {
  message: string = "Logout";

  constructor() {}

  activate(params, route, navigationInstruction) {
    navigationInstruction.router.navigate("login");
  }
}

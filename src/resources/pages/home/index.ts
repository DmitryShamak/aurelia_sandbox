export class Home {
  router;
  message: string = "Home";

  activate(params, route, navigationInstruction): void {
    this.router =  navigationInstruction.router;
  }
}

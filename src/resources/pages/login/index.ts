import {inject, NewInstance} from 'aurelia-dependency-injection';
import {ValidationRules, ValidationController} from "aurelia-validation";
import {computedFrom, bindable} from "aurelia-framework";

@inject(NewInstance.of(ValidationController))
export class Login {
  validator;
  router;
  message: string = "Login";

  @bindable
  name: String = '';
  password: String = '';

  constructor(controller: ValidationController) {
    this.validator = controller;

    ValidationRules
      .ensure((m: Login) => m.name).displayName("Name").required()
      .ensure((m: Login) => m.password).displayName("Password").required()
      .on(this);
  }

  onSubmit() {
    let router = this.router;
    this.validator.validate().then(function(errors) {
      if(errors.length === 0) {
        router && router.navigate("home")
      }
    })
  }

  activate(params, route, navigationInstruction): void {
    this.router =  navigationInstruction.router;
  }
}

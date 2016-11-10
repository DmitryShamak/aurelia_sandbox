import {inject, NewInstance} from 'aurelia-dependency-injection';
import {ValidationRules, ValidationController} from "aurelia-validation";
import {computedFrom} from "aurelia-framework";

@inject(NewInstance.of(ValidationController))
export class Login {
  validator;
  validationMessages;
  message: string = "Login";

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
    console.log(this.name);
    this.validator.validate().then(function(errors) {
      console.info(errors);
    })
  }
}

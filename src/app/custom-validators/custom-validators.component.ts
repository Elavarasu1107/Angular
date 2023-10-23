import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from './validators/nospace.validators'

@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.scss']
})
export class CustomValidatorsComponent {

  loginForm:any;

  constructor(private fb: FormBuilder){
    this.loginForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(5), noSpace.noSpaceValidation]],
      password: ['', [Validators.required]]
    })
  }

  get loginFC(){
    return this.loginForm.controls;
  }

  loginSubmit(){
    console.log(this.loginForm.value);
  }

}

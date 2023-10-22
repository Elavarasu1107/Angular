import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  form:any;

  constructor(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // address: new FormControl('', [Validators.required]),
      contactDetails: new FormGroup({
        address: new FormControl('', [Validators.required]),
        shippingAddress: new FormControl('', [Validators.required]),
        contactNo: new FormControl(0, [Validators.required])
      }),
      skills: new FormArray([])
    })
  }

  get name(){
    return this.form.get('name')
  }

  get email(){
    return this.form.get('email')
  }

  get contactDetails(){
    return this.form.get('contactDetails')
  }

  get skills(){
    return this.form.get('skills')
  }

  addSkills(skill: HTMLInputElement){
    this.skills.push(new FormControl(skill.value))
    skill.value = '';
  }

  removeSkill(index:number){
    this.skills.removeAt(index)
  }

  onReactiveFormSubmit(){
    console.log(this.form.value);

  }

  onSubmit(data:NgForm){
    console.log(data);
  }

  getValue(data:any){
    console.log(data);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  arr:Array<number> = []
  str:string = 'Default';
  isActive:boolean = true;
  name:string|undefined;
  email:string|undefined;
  address:string|undefined;

  userObj:Array<any>=[]

  constructor(){
    for(let i = 0; i< this.arr.length; i++){
      console.log(this.arr[i]);
    }
  }

  addData(): void{
    this.arr.push(this.arr.length+1)
  }

  deleteData(index:number): void{
    this.arr.splice(index, 1)
  }

  switcher(str:string){
    this.str = str
  }

  saveData(){
    this.userObj.push({
      'name': this.name,
      'email': this.email,
      'address': this.address
    })
  }

  deleteUser(index:number):void{
    this.userObj.splice(index, 1)
  }

}

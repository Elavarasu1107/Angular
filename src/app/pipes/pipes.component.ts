import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  str: string = "Angular";
  num: number = 100000;
  dec: number = 3.1471;

  today: Date = new Date();

  json: any = {
    name: 'Dharani'
  }

}

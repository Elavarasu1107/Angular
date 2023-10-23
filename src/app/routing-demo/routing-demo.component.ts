import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-demo',
  templateUrl: './routing-demo.component.html',
  styleUrls: ['./routing-demo.component.scss']
})
export class RoutingDemoComponent {

  constructor(private router:Router){}

  data: any = [
    {
      name: 'ela',
      age: 27,
      id: 1
    },
    {
      name: 'dharani',
      age: 27,
      id: 2
    }
  ]

  routerTS(){
    this.router.navigate(['/age', 1], {queryParams:{name:'ela'}})
  }
}

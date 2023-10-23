import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-age',
  templateUrl: './view-age.component.html',
  styleUrls: ['./view-age.component.scss']
})
export class ViewAgeComponent implements OnInit {

  constructor(private router:ActivatedRoute){}

  ngOnInit(): void {
    this.router.paramMap.subscribe(value=>{
      console.log(value.get('id'));
    })

    const obsTest$ = new Observable(observer=>{
      observer.next('Hi from observer');
      observer.next('Hello from observer')
    }).subscribe(value=>{
      console.log(value);

    });
  }
}

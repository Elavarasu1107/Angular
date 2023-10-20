import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'AngularPractice';
  parentMessage:string = 'Message from app root';
  mP:any;

  eeMessage: any;
  // // Receives data from child to parent
  @ViewChild(PostComponent) messagePost:any;

  // // Executes after the dom is initialized completely
  ngAfterViewInit(): void {
      this.mP = this.messagePost.messagePost
  }

  receiveMessage($event:any){
    console.log($event);
    this.eeMessage = $event
  }
}

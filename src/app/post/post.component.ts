import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  title:string = 'Data Binding in post component'
  messagePost:string = 'message from post component'
  // Receives data from parent to child
  @Input() fromParent: any;
  // Send data to child to parent
  @Output() childEvent = new EventEmitter<string>();

  sendMessage(){
    this.childEvent.emit(this.messagePost)
  }
}

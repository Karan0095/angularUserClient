import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  @Output() deleteUserEvent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  deleteEvent() {
    this.deleteUserEvent.emit(this.user.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  id: number;

  constructor(
    private service: UserService) { }

  ngOnInit(): void {
    this.initUsers();
  }

  initUsers() {
    this.service.findAll().subscribe(data => {
      this.users = data;
    })
  }
  
  deleteUser(id: number) {
    this.service.delete(id).subscribe(() => {
      this.initUsers();
    })
  }
}

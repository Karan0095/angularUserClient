import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  genders = ["men", "women"];
  selectedFile: null;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private http: HttpClient
    ) { 
    this.userForm = this.fb.group({
      lastName: "",
      firstName: "",
      age: 0,
      gender: "",
    });
  }

  ngOnInit(): void {
  }

  addUser() {
    this.service.create(this.userForm.value).subscribe(() => {
      this.router.navigateByUrl("/users")
    }, err => {
      alert(err)
    });
  }

}

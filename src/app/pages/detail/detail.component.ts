import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user?: User;
  id: number;
  genders = ["men", "women"];
  userUpdateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private fb: FormBuilder) {
      this.userUpdateForm = this.fb.group({
        lastName: "",
        firstName: "",
        age: 0,
        gender: ""
      });
      this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.initUser();
  }

  initUser() {
    this.service.findById(this.id).subscribe(data => {
      this.user = data;
      this.userUpdateForm.patchValue(this.user);
    })
  }

  updateUser() {
    this.service.update(this.id, this.userUpdateForm.value).subscribe((data) => {
      this.user = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {}

  onSubmit(form: FormGroup) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('johndoe77', Validators.required),
      pwd: new FormControl('123123123', Validators.required),
    });
  }
}

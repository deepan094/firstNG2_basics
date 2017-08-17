import { User } from './User';
import { Component, OnInit } from '@angular/core';
import { AppModule } from './../app.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  public user: User;

  onSubmit(signForm: NgForm) {
    if (signForm.invalid) {
      signForm.reset();
      return;
    }
    alert('inside the controller!!!');
    console.log('form is valid: ' + signForm.valid);
    console.log(signForm.value);

  }

  constructor() { }

  ngOnInit() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      re_email: '',
      password: '',
      confirmPassword: '',
      DOB: null,
      gender: ''
    };
  }

}

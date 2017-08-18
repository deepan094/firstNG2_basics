import { User } from './User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-form',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  //this type of validation is called relative validation!!
  ngOnInit() {
    this.signUpFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      re_email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  // called when submit sign-up form
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    //alert('clicked form submit!!!');
    if(!valid) return;
     this.router.navigate(['home']);
  }
}

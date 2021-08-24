import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private authService: AuthService,private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
   }



  ngOnInit(): void {


  }

  get getControl() {
    return this.myForm.controls;
  }

  get email() { return this.myForm.get('email'); }

get password() { return this.myForm.get('password'); }

  onSubmit(myform:FormGroup)
  {
    this.authService.login(myform.value.email, myform.value.password);

  }

}

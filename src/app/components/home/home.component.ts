import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@elpoli.edu.co')])
  });


  // constructor(public loginService: LoginService) { }
  constructor() { }

  ngOnInit(): void {
  }

  // onLogin(){
  //   this.loginService.onLogin(this.loginForm.value);
  //   this.loginForm.reset();
  // }

}

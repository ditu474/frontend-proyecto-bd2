import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login, Error} from 'src/app/model';
import { LoginService } from 'src/app/services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginInfo: Login;
  formGroup: FormGroup;
  error: Error;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@elpoli.edu.co')]],
      tipo: ['', Validators.required]
    });
  }

  public openSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
    });
  }

  public sendData(): void {
    this.openSnackBar('Cargando...');
    const {email, tipo} = this.formGroup.value;
    this.loginInfo =  new Login(email, tipo);
    this.loginService.ingresar(this.loginInfo).subscribe(data => {
      this.authService.setPersonalInfo(data);
      this.router.navigate(['/form']);
      this.error = null;
      this.formGroup.reset();
      this.openSnackBar('Bienvenid@ 🤟🏼');
    },
    err => {
      this.error = new Error(err.status, err.error.message);
      console.log(this.error);
      this.authService.setPersonalInfo(null);
      this.openSnackBar('No hemos encontrado tu información 😵');
    });
  }



}

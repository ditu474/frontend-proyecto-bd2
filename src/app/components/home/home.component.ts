import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*
  LoginArray: Array<any> = new Array<Login>();
  productoOne: Login = new Login();
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, public LoginInyectado: LoginService ) {}

  ngOnInit(): void {
    this.buildForm();
    console.log(this.formGroup.value);
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@elpoli.edu.co')],
      tipo: ['', Validators.required]
    });
  }

  public sendData() {
    this.productoOne = this.formGroup.value as Login;
    this.LoginInyectado.ingresar().subscribe((productoRecibido) => {
      console.log(productoRecibido);
      this.formGroup.reset();
      //TODO: AQUI IRIA EL INGRESO A LA APP
    });
  }

  */

}

import { Component, OnInit, Inject, group } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UserService } from '../../services/service.index';
import { Usuarios } from '../../models/user.model';
import { Router } from '@angular/router';
// import {UserService} from '../../services/service.index'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  forma: FormGroup;

  constructor(private _userService: UserService, @Inject(DOCUMENT) private _document, public router: Router) { }
  validatePassword(value1: string, value2: string){
    return (group: FormGroup) =>{
      let pass1 = group.controls[value1].value;
      let pass2 = group.controls[value2].value;
      if(pass1 === pass2 ) {
        return null;
      }
      return {validatePassword:true};
    }
  }
  ngOnInit() {
    let url = `assets/css/style_login.css`;
    let clas = "bg-gradient-primary";
    this._document.getElementById('body-class').setAttribute('class', clas);
    this._document.getElementById('styleCambiar').setAttribute('href', url);

    this.forma = new FormGroup({
      name: new FormControl(null, Validators .required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password_confirmation: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, {validators: this.validatePassword('password', 'password_confirmation')}

    );

  }

  registerUser(){
    if(this.forma.invalid){
      return
    }
    if(!this.forma.value.condiciones){
      swal('important!', 'You must accept the conditions', 'warning')
      return;
    }

    let usuario = new Usuarios(
      this.forma.value.name,
      this.forma.value.email,
      this.forma.value.password,
      this.forma.value.password_confirmation,
    );
      this._userService.addUsers(usuario).subscribe(resp=>{
      swal('Excellent', 'To activate your account open your email', 'info');

      this.router.navigate(['/login'])
      })
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Usuarios} from '../../models/user.model'
import { UserService } from '../../services/service.index';
import swal from 'sweetalert';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styles: []
})
export class PasswordComponent implements OnInit {
  forma: FormGroup;
  token: string;
  constructor(
    @Inject(DOCUMENT) private _document,
    public router: Router,
    public ActivatedRoute: ActivatedRoute,
    public _userService: UserService
    ) {
      ActivatedRoute.params.subscribe(params=>{
        this.token = params['token'];
      })
    }
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
    let clas = 'bg-gradient-primary';
    this._document.getElementById('body-class').setAttribute('class', clas);
    this._document.getElementById('styleCambiar').setAttribute('href', url);

    this.forma = new FormGroup({
      password: new FormControl(null, Validators.required),
      password_confirmation: new FormControl(null, Validators.required),
    },{validators: this.validatePassword('password', 'password_confirmation')});
  }

  registerUser(){
    if(this.forma.invalid){
      return
    }
    let user = new Usuarios (
      null,
      null,
      this.forma.value.password,
      this.forma.value.password_confirmation,
    );
    this._userService.newPassword(this.token, user).subscribe(resp=>{
      swal('Perfect!', 'your credentials have been updated', 'success')

    })
  }
}

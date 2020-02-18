import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {  NgForm } from '@angular/forms';
import { UserService } from '../../services/service.index';
import { Usuarios } from '../../models/user.model';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
recuerdame: boolean = false;
email: string;
  constructor(@Inject(DOCUMENT) private _document, public _serviceUser: UserService, public router: Router) { }
  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    if(this.email.length > 1) {
      this.recuerdame = true;
    }
    let url = `assets/css/style_login.css`;
    let clas = 'bg-gradient-primary';
    this._document.getElementById('body-class').setAttribute('class', clas);
    this._document.getElementById('styleCambiar').setAttribute('href', url);


  }
  loginSession(forma: NgForm) {

    if (forma.invalid) {
      return;
    }
    let user = new Usuarios(null, forma.value.email, forma.value.password, null, null);
    this._serviceUser.initSession(user, forma.value.condicions).subscribe(resp => {
      console.log(resp == true);
      if(resp == true) {
        // this.router.navigate(['/dashboard'])
        window.location.href="/historial"
      }else{

      swal('Error!', 'The credentials are incorrect', 'error')
      }

    });
  }
}

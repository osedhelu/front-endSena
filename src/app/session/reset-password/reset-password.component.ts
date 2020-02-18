import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Usuarios } from '../../models/user.model';
import { UserService } from '../../services/service.index';
import swal from 'sweetalert';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: []
})
export class ResetPasswordComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _userService: UserService, public router: Router) { }

  ngOnInit() {

    let url = `assets/css/style_login.css`;
    this._document.getElementById('styleCambiar').setAttribute('href', url);
    let clas = "bg-gradient-primary";
    this._document.getElementById('body-class').setAttribute('class', clas);
  }
  resetPasswod(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    let email = forma.value.txtEmail;
      this._userService.resetPassword(email).subscribe((resp:any)=>{
        swal('Attention!', 'To reset your password you must open the email and update it', 'info');
        this.router.navigate(['/login']);
      })
  }
}

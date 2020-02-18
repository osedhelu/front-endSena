import { Injectable } from '@angular/core';
import {  Usuarios} from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from "../../config/config";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert'
@Injectable()
export class UserService {
  UserData: Usuarios;
  token: string;
  constructor(public http: HttpClient, public router: Router) {
    this.cargarStorage();
  }
  estalogiado(){
    return (this.token.length > 5 ) ? true : false;
  }
cargarStorage(){
   if(localStorage.getItem('token')){
     this.token = localStorage.getItem('token');
     this.UserData = JSON.parse(localStorage.getItem('user'));
   }else{
     this.token = '';
     this.UserData = null;
   }
}
  guardarStorage(user: Usuarios, token: string){
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    this.UserData = user;
    this.token = token;
  }
  addUsers(user: Usuarios) {
    let url = `${URL_SERVICES}/Users`;
    return this.http.post(url, user).catch(( err: any )=>{
      console.log(err)
      swal('important!', 'This user already exists', 'error')

      return Observable.throw('el usuario no es valido')

    });
  }
  initSession(user: Usuarios, recuerdame: boolean = false) {
    if (recuerdame) {
      localStorage.setItem('email', user.email);
    }else {
      localStorage.removeItem('email');
    }
    let url = `${URL_SERVICES}/login`;
    return this.http.post(url, user).map((resp: any) => {
      console.log('->>>>', resp);
     if (resp.ok == true) {
      this.guardarStorage(resp.dataUsers, resp.token);
      return true;
     }
     return false;
    }).catch((err: any) => {
      console.log(err);
      swal('Account not active', 'open your email', 'info');
      return Observable.throw(err);
    });
  }

  logout(){
    this.token = "";
    this.UserData = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  resetPassword(email) {
    let url = `${URL_SERVICES}/users/verifyEmail/${email}`;
    return this.http.get(url).catch(err =>{
      swal('important!', 'That email is not valid', 'error');
      console.log(err.error);
      return Observable.throw(err.error);

    })

  }

  newPassword(token, User: Usuarios){
    let url = `${URL_SERVICES}/users/resetPassword/${token}`;
    return this.http.post(url, User).map(resp=>{
      swal('Excellent!', 'Open your email and reset your password', 'success');
      this.router.navigate(['login']);
    }).catch(err=>{
      console.log(err.error);
      return Observable.throw(err.error);
    })
  }
  cargarStudent(){
    let url = `${URL_SERVICES}/Buyers`;
    return this.http.get(url);
  }
  cargarTeacher(){
    let url = `${URL_SERVICES}/Sellers`;
    return this.http.get(url);
  }
  cargarUsuarios(){
    let url = `${URL_SERVICES}/Users`;
    return this.http.get(url);
  }
}

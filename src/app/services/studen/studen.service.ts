import { Injectable } from '@angular/core';
import {  Studen } from '../../models/studen.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from "../../config/config";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert';
@Injectable()
export class StudenService {

  constructor(public http: HttpClient) { }
  addStuden(studen: Studen) {
 	let url	= `${URL_SERVICES}/studen`;
 	return this.http.post(url, studen);
  }
  listStuden(desde: number = 0) {
  	let url = `${URL_SERVICES}/studen?desde=${desde}`;

  	return this.http.get(url);
  }
  deletestuden(id) {
  	let url = `${URL_SERVICES}/studen`;
  	return this.http.delete(url, id);
  }
}

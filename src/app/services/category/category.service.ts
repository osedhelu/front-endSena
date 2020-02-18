import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICES } from '../../config/config';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CategoryService {

  constructor(public http: HttpClient, public router: Router) { }
  addCategoty(categories: Category) {
    let url = `${URL_SERVICES}/categories`;
    return this.http.post(url, categories).catch(err=>{
      console.log(err);

      return Observable.throw(err);
    });
  }

  listCategory(){
    let url = `${URL_SERVICES}/categories`;
    return this.http.get(url);
  }

  deleteCategory(id){
    let url = `${URL_SERVICES}/categories/${id}`;
    return this.http.delete(url).catch((err:any) => {
      console.log(err);
      return Observable.throw(err);
    });
  }

  editCategory(id, category: Category){
    let url = `${URL_SERVICES}/categories/${id}`;
    return this.http.put(url, category).catch((err:any)=> {
      console.log(err);
      return Observable.throw(err);
    });

  }
}

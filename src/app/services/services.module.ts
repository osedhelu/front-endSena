import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserService,
  LoginGuardGuard,
  CategoryService,
  CoursesService,
  ArchivosService,
  StudenService
} from './service.index';


// _________________________________________________________________________
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    LoginGuardGuard,
    CoursesService,
    CategoryService,
    ArchivosService,
    StudenService
  ],
  declarations: []
})
export class ServicesModule { }

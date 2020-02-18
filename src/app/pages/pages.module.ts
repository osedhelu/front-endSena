import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

import { CommonModule } from '@angular/common';
import { InitPages } from './pages-init/init.component';
import {SharedModule} from '../shared/shared.module'
import { PAGES_ROUTES } from './pages.route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { CoursesComponent } from './courses/courses.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';
import { ChartsModule } from 'ng2-charts';
import { IconPickerModule } from 'ngx-icon-picker';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PAGES_ROUTES,
    ChartsModule,
    IconPickerModule,
    AngularMultiSelectModule,
    PipesModule
  ],
  declarations: [InitPages, DashboardComponent, CategoriesComponent, CoursesComponent, MyprofileComponent, CategoryaddComponent, EditTeacherComponent],
  exports: [
    InitPages,
    DashboardComponent
  ]

})
export class PagesModule { }

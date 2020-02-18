import { RouterModule, Routes } from '@angular/router';
import { InitPages } from './pages-init/init.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardGuard } from '../services/service.index';
import { CoursesComponent } from './courses/courses.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CategoryaddComponent } from './categoryadd/categoryadd.component';



const pagesRoutes: Routes = [
  { path: '', component: InitPages,
        canActivate: [LoginGuardGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
            {path: 'courses', component: CoursesComponent, data: {title: 'Courses'}},
            {path: 'Studen', component: CategoriesComponent, data: {title: 'categories'}},
            {path: 'addStuden', component: CategoryaddComponent, data: {title: 'new Category'}},
            {path: 'profile', component: MyprofileComponent, data: {title: 'My Profile'}},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

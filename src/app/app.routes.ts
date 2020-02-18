import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './session/login/login.component';
import { InitPages } from './pages/pages-init/init.component';
import { RegisterComponent } from './session/register/register.component';
import { ResetPasswordComponent } from './session/reset-password/reset-password.component';
import { NopagefoundComponentComponent } from './shared/nopagefound-component/nopagefound-component.component';
import { PasswordComponent } from './session/password/password.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'passwordReset', component: ResetPasswordComponent },
    { path: 'asdhfpivanroeuv/:token', component: PasswordComponent, data: {title: 'reset password'}},
    { path: '**', component: NopagefoundComponentComponent }

];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

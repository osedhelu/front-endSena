import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

import { InitComponent } from './init/init.component';
import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';
import { ResetPasswordComponent } from './session/reset-password/reset-password.component';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { PasswordComponent } from './session/password/password.component';

@NgModule({
  declarations: [
    InitComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [InitComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import {HeaderComponent} from './header/header.component'
import {SidebarComponent} from './sidebar/sidebar.component';
import { NopagefoundComponentComponent } from './nopagefound-component/nopagefound-component.component';
import { FooterComponent } from './footer/footer.component';
import { HeadboardComponent } from './headboard/headboard.component';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponentComponent,
    FooterComponent,
    HeadboardComponent
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeadboardComponent
  ]
})
export class SharedModule { }

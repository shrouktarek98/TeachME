import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SearchTeacherComponent } from './search-teacher/search-teacher.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';


const appRoutes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'items/:id', component: ItemsComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'searchteacher/:id', component: SearchTeacherComponent},
  {path: 'viewprofile/:id', component: ViewprofileComponent }

  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CareerComponent } from './career/career.component';
import { WorksComponent } from './works/works.component';
import { InformationComponent } from './information/information.component';
import { FottorComponent } from './fottor/fottor.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ItemsComponent } from './items/items.component';
import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SearchTeacherComponent } from './search-teacher/search-teacher.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CareerComponent,
    WorksComponent,
    InformationComponent,
    FottorComponent,
    TeacherComponent,
    ItemsComponent,
    SearchTeacherComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    ViewprofileComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

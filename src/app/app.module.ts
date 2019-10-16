import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectLoginComponent } from './pages/project-login/project-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectRegisterationComponent } from './pages/project-registeration/project-registeration.component';
import { ProjectLandingComponent } from './pages/project-landing/project-landing.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavbarModule } from "./pages/project-main/navbar.module";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectLoginComponent,
    LoginComponent,
    RegisterComponent,
    ProjectRegisterationComponent,
    ProjectLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,

    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

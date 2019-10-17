import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectLoginComponent } from "./pages/project-login/project-login.component";
import { ProjectRegisterationComponent } from "./pages/project-registeration/project-registeration.component";
import { ProjectLandingComponent } from "./pages/project-landing/project-landing.component";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectLandingComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/project-main/navbar.module').then(m => m.NavbarModule)
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from "./navbar.component";
import { ProjectOption1Component } from "./project-option1/project-option1.component";
import { CommonModule } from "@angular/common";
// import { ProjectOption2Component } from "./project-option2/project-option2.component";
import { BorrowHistoryComponent } from './borrow-history/borrow-history.component';
import { BookListComponent } from './book-list/book-list.component';
import { LendHistoryComponent } from './lend-history/lend-history.component';
// import { ProjectOption3Component } fro./project-option3/lend-history.componentponent";


const routes: Routes = [{
  path: '',
  component: NavbarComponent,

  children: [{
    path: '',
    component: ProjectOption1Component
  }, {
    path: 'dashboard',
    component: ProjectOption1Component
  },
  {
    path: 'borrowhistory',
    component: BorrowHistoryComponent
  },
  {
    path: 'lendhistory',
    component: LendHistoryComponent
  },
  {
    path: 'profile',
    component: BookListComponent
  },]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }

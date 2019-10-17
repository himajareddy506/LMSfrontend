import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProjectOption1Component } from "./project-option1/project-option1.component";
import { NavbarComponent } from "./navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { ProjectOption2Component } from './project-option2/project-option2.component';
// import {ProjectOption3Component} from './project-option3/lend-history.componentent';
import { ProjectDialog1Component } from "../project-dialog/project-dialog1/project-dialog1.component";
import { BorrowHistoryComponent } from './borrow-history/borrow-history.component';
import { BookListComponent } from './book-list/book-list.component';
import { LendHistoryComponent } from './lend-history/lend-history.component';
import { AddBookComponent } from './add-book/add-book.component';
// import { ProjectLandingComponent } from "../project-landing/project-landing.component";


@NgModule({
  declarations: [
    NavbarComponent,
    ProjectOption1Component,
    ProjectOption2Component,
    // ProjectOption3Component,
    ProjectDialog1Component,
    BorrowHistoryComponent,
    BookListComponent,
    LendHistoryComponent,
    AddBookComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatExpansionModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    CommonModule,
    NavbarRoutingModule
  ],
  entryComponents: [
    ProjectDialog1Component
  ]
})
export class NavbarModule {
}

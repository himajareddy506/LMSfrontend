import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectOption1Component} from './project-option1.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProjectOption1Component', () => {
  let component: ProjectOption1Component;
  let fixture: ComponentFixture<ProjectOption1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        BrowserModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ProjectOption1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOption1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create first navigation option component', () => {
    expect(component).toBeTruthy();
  });
});

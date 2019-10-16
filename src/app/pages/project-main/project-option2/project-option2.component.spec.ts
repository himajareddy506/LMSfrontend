import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOption2Component } from './project-option2.component';
import {
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule, MatInputModule,
  MatPaginatorModule, MatSnackBarModule,
  MatTableModule
} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProjectOption2Component', () => {
  let component: ProjectOption2Component;
  let fixture: ComponentFixture<ProjectOption2Component>;

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
        MatInputModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [ ProjectOption2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

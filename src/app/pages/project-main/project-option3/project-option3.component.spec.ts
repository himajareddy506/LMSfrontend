import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOption3Component } from './project-option3.component';
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

describe('ProjectOption3Component', () => {
  let component: ProjectOption3Component;
  let fixture: ComponentFixture<ProjectOption3Component>;

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
      declarations: [ ProjectOption3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOption3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

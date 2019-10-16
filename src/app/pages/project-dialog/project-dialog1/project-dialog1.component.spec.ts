import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectDialog1Component} from './project-dialog1.component';
import {
  MAT_DIALOG_DATA,
  MatCardModule, MatDialog,
  MatDialogModule, MatDialogRef,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommunicationServiceService} from "../../../service/communication_service/communication-service.service";

describe('ProjectDialog1Component', () => {
  let component: ProjectDialog1Component;
  let fixture: ComponentFixture<ProjectDialog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule,
        MatFormFieldModule,
        HttpClientModule,
        FormsModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatDialogModule,
        BrowserAnimationsModule],
      declarations: [ProjectDialog1Component],
      providers: [
        MatDialogRef,
        {provide: MatDialog, useClass: 'MatDialogStub'},
        {
          // I was expecting this will pass the desired value
          provide: MAT_DIALOG_DATA,
          useValue: 'model'
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});

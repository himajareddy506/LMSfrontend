import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRegisterationComponent } from './project-registeration.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ProjectRegisterationComponent', () => {
  let component: ProjectRegisterationComponent;
  let fixture: ComponentFixture<ProjectRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[MatCardModule,
        MatFormFieldModule,
        MatToolbarModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([])],
      declarations: [ ProjectRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a login/registeration', function () {
    expect(component.openDialog('login')).toBeTruthy();
  });
});

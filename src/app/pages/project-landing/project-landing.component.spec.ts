import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectLandingComponent} from './project-landing.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterTestingModule} from "@angular/router/testing";
import {ProjectLoginComponent} from "../project-login/project-login.component";
import {ProjectRegisterationComponent} from "../project-registeration/project-registeration.component";

describe('ProjectLandingComponent', () => {
  let component: ProjectLandingComponent;
  let fixture: ComponentFixture<ProjectLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule,
        RouterTestingModule.withRoutes([])],
      declarations: [ProjectLandingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the landing page', () => {
    expect(component).toBeTruthy();
  });

  it('should select a login/registeration', function () {
    expect(component.openDialog('login')).toBeTruthy();
  });

});

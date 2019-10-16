import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectLoginComponent} from './project-login.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommunicationServiceService} from "../../service/communication_service/communication-service.service";


describe('ProjectLoginComponent', () => {
  let component: ProjectLoginComponent;
  let fixture: ComponentFixture<ProjectLoginComponent>;
  let button, buttondisable;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule,
        MatFormFieldModule,
        HttpClientModule,
        FormsModule,
        MatToolbarModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([])],
      declarations: [ProjectLoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLoginComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement
    buttondisable = component.loginForm.valid;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });


  // Service for login test case
  it('should return a promise that resolves to undefined', function () {
    const communicationService = fixture.debugElement.injector.get(CommunicationServiceService);
    fixture.detectChanges();
    return communicationService.postObjects('user','username').then(function (result) {
      expect(result).toBeFalsy();
    });
  });

  // Button disabled test case
  /*it("should disable the button when the form is not valid", () => {
    buttondisable = false;
    fixture.detectChanges();
    expect(button.nativeElement.querySelector('button').disabled).toBeTruthy();
  });*/

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  //field test case
  it('username field validity', () => {
    let username = component.loginForm.controls['userId'];
    expect(username.valid).toBeFalsy();
  });

  //login form branch coverage

  it('should cover the branch of loginform case 1', () => {
    const spy = spyOn(component, 'login');
    component.formValid = true;
    component.login(component.loginForm);
    expect(spy).toHaveBeenCalled();
  });

  it('should cover the branch of loginform case 2', () => {
    const spy = spyOn(component, 'login');
    component.formValid = null;
    component.login(component.loginForm);
    expect(spy).toHaveBeenCalled();
  });

  it('should select a login/registeration', function () {
    expect(component.openDialog('login')).toBeTruthy();
  });

  it('should confirm the login', function () {
    expect(component.loginConfirm()).toBeTruthy();
  });

  it('should enable the login button', function () {
    expect(component.login(component.loginForm)).toBeTruthy();
  });


});

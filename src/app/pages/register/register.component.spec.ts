import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('Component: Login', () => {

  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {

      // refine the test module by declaring the test component
      TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, FormsModule],
          declarations: [RegisterComponent]
      });

      // create component and test fixture
      fixture = TestBed.createComponent(RegisterComponent);

      // get test component from the fixture
      component = fixture.componentInstance;
      component.ngOnInit();
  });

  it('registerForm invalid when empty', () => {
      expect(component.registerForm.valid).toBeFalsy();
  });
  
  it('emailId field validity', () => {
    let errors = {};
    let emailId = component.registerForm.controls['emailId'];
    expect(emailId.valid).toBeFalsy();

    // Email field is required
    errors = emailId.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    emailId.setValue("test");
    errors = emailId.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    emailId.setValue("test@example.com");
    errors = emailId.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
});

it('submitting a registerForm return message', () => {
  expect(component.registerForm.invalid).toBeFalsy();
  component.registerForm.controls['emailId'].setValue("test@test.com");
  component.registerForm.controls['mobileNumber'].setValue("9876543210");
  component.registerForm.controls['customerName'].setValue("test");
  component.registerForm.controls['dob'].setValue("1993/06/13");
  expect(component.registerForm.valid).toBeTruthy();

});
  it('should create new object', () => {
    // @ts-ignore
    const comp = new RegisterComponent();
    comp.ngOnInit();
    expect(comp).toBeTruthy();
  });
});

// /* tslint:disable:no-unused-variable */

// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { LoginComponent, User } from "./login.component";


// describe('Component: Login', () => {

//     let component: LoginComponent;
//     let fixture: ComponentFixture<LoginComponent>;

//     beforeEach(() => {

//         // refine the test module by declaring the test component
//         TestBed.configureTestingModule({
//             imports: [ReactiveFormsModule, FormsModule],
//             declarations: [LoginComponent]
//         });

//         // create component and test fixture
//         fixture = TestBed.createComponent(LoginComponent);

//         // get test component from the fixture
//         component = fixture.componentInstance;
//         component.ngOnInit();
//     });

//     it('form invalid when empty', () => {
//         expect(component.loginForm.valid).toBeFalsy();
//     });

//     it('emailId field validity', () => {
//         let errors = {};
//         let emailId = component.loginForm.controls['emailId'];
//         expect(emailId.valid).toBeFalsy();

//         // Email field is required
//         errors = emailId.errors || {};
//         expect(errors['required']).toBeTruthy();

//         // Set email to something
//         emailId.setValue("test");
//         errors = emailId.errors || {};
//         expect(errors['required']).toBeFalsy();
//         expect(errors['pattern']).toBeTruthy();

//         // Set email to something correct
//         emailId.setValue("test@example.com");
//         errors = emailId.errors || {};
//         expect(errors['required']).toBeFalsy();
//         expect(errors['pattern']).toBeFalsy();
//     });

//     it('password field validity', () => {
//         let errors = {};
//         let password = component.loginForm.controls['password'];

//         // Email field is required
//         errors = password.errors || {};
//         expect(errors['required']).toBeTruthy();

//         // Set email to something
//         password.setValue("123456");
//         errors = password.errors || {};
//         expect(errors['required']).toBeFalsy();
//         expect(errors['minlength']).toBeTruthy();

//         // Set email to something correct
//         password.setValue("123456789");
//         errors = password.errors || {};
//         expect(errors['required']).toBeFalsy();
//         expect(errors['minlength']).toBeFalsy();
//     });

//     // it('submitting a form emits a user', () => {
//     //     expect(component.loginForm.valid).toBeFalsy();
//     //     component.loginForm.controls['emailId'].setValue("test@test.com");
//     //     component.loginForm.controls['password'].setValue("123456789");
//     //     expect(component.loginForm.valid).toBeTruthy();

//     //     let user: User;
//     //     // Subscribe to the Observable and store the user in a local variable.
//     //     component.loginForm.subscribe((value) => user = value);

//     //     // Trigger the login function
//     //     component.login();

//     //     // Now we can check to make sure the emitted value is correct
//     //     expect(user.email).toBe("test@test.com");
//     //     expect(user.password).toBe("123456789");
//     // });
// });
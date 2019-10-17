import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { AlertService, AuthenticationService } from '../_services';

export class User {
    constructor(public emailId: string,
        public password: string) {
    }
}

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    data1: any;
    emailId: string;
    passcode: string;
    err = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: Router,
        private http: HttpClient
    ) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            emailId: ['', [
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")]],
            passcode: ['', [
                Validators.required,
                Validators.minLength(5)]],
        });

    }
    goto() {
        this.route.navigate(['/dashboard']);

    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        console.log("in submit")
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        console.log(this.loginForm);
        var reqObj1 = {
            "emailId": this.loginForm.value.emailId,
            "passcode": this.loginForm.value.passcode
        };

        this.http
            .post(environment.baseUrl + '/lms/api/login', this.loginForm.value)
            .subscribe((res: Response) => {
                console.log(res);
                // alert(res['message'])
                sessionStorage.setItem("userId", res['userId']);
                this.route.navigate(['/dashboard']);

            }, (err) => {
                this.err = true;
                console.log("rerror", err)
                alert(err.message);
            });

    }

    /* Nav Links for register and Login  */
    openDialog = (load) => {

        if (load == 'Register') {
            //this.showScreen = true;

            this.route.navigateByUrl('/register');
        } else if (load == 'Login') {
            //this.showScreen = false;
            this.route.navigateByUrl('/login');
        }
        return true;
    }
}

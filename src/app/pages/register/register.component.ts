import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  data: any;
  firstName: string;
  emailId: string;
  mobileNumber: number;
  confirmPassword: any;
  lastName: string;
  date: string;
  apibaseUrl: any;
  err = false;
  response = false;
  alertMsg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      // Validations for form fields
      firstName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      lastName: ['', [Validators.required]],
      emailId: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit = () => {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // console.log(this.registerForm);
    var reqObj = {
      "firstName": this.registerForm.value.firstName,
      "emailId": this.registerForm.value.emailId,
      "mobileNumber": this.registerForm.value.mobileNumber,
      "lastName": this.registerForm.value.lastName
    };
    this.http.post(environment.baseUrl + '/lms/api/register', reqObj).subscribe((response) => {
      if (response) {
        this.response = true;
        this.data = response;
        this.alertMsg = '';
        this.alertMsg = this.data.message;
        alert(response['message']);
        this.firstName = this.data.firstName;
        this.emailId = this.data.emailId;
        this.mobileNumber = this.data.mobileNumber;
        this.lastName = this.data.lastName;
        // Navigate to login page if form is submitted successfully
        this.route.navigate(['/login']);
      }

      // console.log(this.registerForm);


    }, (err) => {
      // if form returns error
      this.err = true;
      console.log("rerror", err)
      alert(err.message);
    });

  }


  openDialog = (load) => {
    /* Nav Links for register and Login  */
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

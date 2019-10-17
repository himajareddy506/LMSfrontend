import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { AlertService, AuthenticationService } from '../_services';

export class User {
  constructor(public author: string,
    public bookName: string) {
  }
}
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  addForm: FormGroup;
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
    this.addForm = this.formBuilder.group({
      author: ['', [
        Validators.required]],
      bookName: ['', [
        Validators.required]],
    });

  }
  goto() {
    this.route.navigate(['/dashboard']);

  }
  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  onSubmit() {
    console.log("in submit")
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }

    this.loading = true;

    console.log(this.addForm);
    var reqObj1 = {
      "author": this.addForm.value.author,
      "bookName": this.addForm.value.bookName
    };

    this.http
      .post(environment.baseUrl + '/lms/api/book/add', this.addForm.value)
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

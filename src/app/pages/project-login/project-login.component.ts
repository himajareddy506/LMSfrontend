import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CommunicationServiceService } from "../../service/communication_service/communication-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-login',
  templateUrl: './project-login.component.html',
  styleUrls: ['./project-login.component.scss']
})
export class ProjectLoginComponent implements OnInit {
  loginForm: FormGroup;
  formValid: any;
  responseLogin: any;
  display: string;
  responseAccount: any;

  constructor(private _service: CommunicationServiceService, private route: Router) {
    this.loginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)])
    });
  }

  ngOnInit() {

  }

  public hasLoginError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public login = (loginForm) => {
    this.formValid = this.loginForm.valid;
    if (this.formValid) {
      //console.log(loginForm);
      this.loginConfirm();
    }

    return true;
  }

  /* istanbul ignore next */
  async loginConfirm() {
    // @ts-ignore
    this.responseLogin = await this._service.loginUser(this.loginForm.value);

    if (!this.responseLogin) {
      //Failure response show the user
      this.display = 'Invalid user';

    } else {

      localStorage.setItem('userId', this.responseLogin.accountId);
      //this.responseAccount = await this._service.getAccountDetails(this.responseLogin.accountId);
      if (!this.responseAccount) {
        // error alert for the user
      } else {
        //Success response save
        localStorage.setItem('userName', this.responseAccount.accountHolderName);
        localStorage.setItem('accountNumber', this.responseAccount.accountNumber);
        localStorage.setItem('balance', this.responseAccount.balance);
        this.route.navigateByUrl('/main');
      }
    }

    return true;
  }

  openDialog(load) {
    /* istanbul ignore else  */
    /* istanbul ignore if  */
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

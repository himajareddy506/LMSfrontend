import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-registeration',
  templateUrl: './project-registeration.component.html',
  styleUrls: ['./project-registeration.component.scss']
})
export class ProjectRegisterationComponent implements OnInit {
  public regForm: FormGroup;

  constructor(private route: Router) {
    this.regForm = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      lname: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      cpassword: new FormControl('', [Validators.required, Validators.maxLength(6)])
    });
  }

  ngOnInit() {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.regForm.controls[controlName].hasError(errorName);
  }
  
  /*public onCancel = () => {
      // this.location.back();
    }*/

  /* istanbul ignore next */
  onCancel() {
    this.route.navigateByUrl('/main');
  }

  openDialog(load) {
    if (load == 'Register') {
      /* istanbul ignore next */
      this.route.navigateByUrl('/register');
    } else if (load == 'Login') {
      /* istanbul ignore next */
      this.route.navigateByUrl('/login');
    }
    return true;
  }

  /* istanbul ignore next */
  public newRegsiteration = (ownerFormValue) => {
    if (this.regForm.valid) {
      console.log(ownerFormValue);
    }
  }

}

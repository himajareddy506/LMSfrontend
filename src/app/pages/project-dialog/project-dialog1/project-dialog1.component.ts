import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatSnackBar } from "@angular/material/snack-bar"
import { CommunicationServiceService } from "../../../service/communication_service/communication-service.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-dialog1',
  templateUrl: './project-dialog1.component.html',
  styleUrls: ['./project-dialog1.component.scss']
})
export class ProjectDialog1Component implements OnInit {
  chooseForm: FormGroup;
  /* istanbul ignore next */
  formShow: boolean = false;

  userId: number;
  err: boolean;
  response: string;
  /* istanbul ignore next */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar, private router: Router,
    private http: HttpClient, public dialogRef: MatDialogRef<ProjectDialog1Component>, private _service: CommunicationServiceService, private route: Router) {

  }

  /* istanbul ignore next */
  ngOnInit() {

    console.log(this.data.location);
    if (this.data.fromComponent == 'borrow') {

      this.response = '';

    } else if (this.data.fromComponent == 'request') {

      this.request();
    }
  }

  confirm = () => {
    var reqObj1 = {
      "bookId": this.data.location.bookId,
      "UserId": sessionStorage.getItem('userId')
    };

    this.http
      .post(environment.baseUrl + '/lms/api/book/request', reqObj1)
      .subscribe((res: Response) => {
        console.log(res);
        // alert(res['message'])
        sessionStorage.setItem("userId", res['userId']);
        this.route.navigate(['/dashboard']);

        this.response = res['message'];

      }, (err) => {
        this.err = true;
        console.log("rerror", err)
        alert(err.message);
      });
  }

  request = () => {
    var reqObj1 = {
      "bookId": this.data.location.bookId,
      "UserId": sessionStorage.getItem('userId')
    };

    this.http
      .post(environment.baseUrl + '/lms/api/book/request', reqObj1)
      .subscribe((res: Response) => {
        console.log(res);
        // alert(res['message'])
        sessionStorage.setItem("userId", res['userId']);
        this.route.navigate(['/dashboard']);

        this.response = res['message'];

      }, (err) => {
        this.err = true;
        console.log("rerror", err)
        alert(err.message);
      });
  }

  cancel = () => {
    this.dialogRef.close();
    this.route.navigate(['/dashboard']);
  }
}

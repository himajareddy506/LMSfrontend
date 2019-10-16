import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {MatSnackBar} from "@angular/material/snack-bar"
import {CommunicationServiceService} from "../../../service/communication_service/communication-service.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-project-dialog1',
  templateUrl: './project-dialog1.component.html',
  styleUrls: ['./project-dialog1.component.scss']
})
export class ProjectDialog1Component implements OnInit {
  chooseForm: FormGroup;
  /* istanbul ignore next */
  formShow: boolean = false;
  stockName: string;

  getConfirmResult: any;
  payConfirmResult: any;
  stockExchangeName: string;
  quantity: any;
  currentPrice: any;
  stockId: any;
  totalCurrentprice: any;
  price: any;
  totalPrice: any;
  userId: any;
  /* istanbul ignore next */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<ProjectDialog1Component>, private _service: CommunicationServiceService, private route: Router) {
    this.chooseForm = new FormGroup({
      // productPrice: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      quantity: new FormControl('', [Validators.required, Validators.maxLength(1), Validators.max(5)])
    });
  }

  /* istanbul ignore next */
  ngOnInit() {
    // console.log(this.data);
  }

  
  public hasError = (controlName: string, errorName: string) => {
    return this.chooseForm.controls[controlName].hasError(errorName);
  }

  /* istanbul ignore next */
  async confirm(chooseform) {
    // console.log(this.data.location, chooseform);
    if (this.chooseForm.valid) {
      this.formShow = true;

      //this.getConfirmResult = await this._service.confirmingStocks(this.data.location, chooseform)
      // console.log(this.getConfirmResult);
      if (!this.getConfirmResult) {

      } else {
        this.stockId = this.getConfirmResult.myStockId;
        this.stockName = this.getConfirmResult.stockName;
        this.quantity = this.getConfirmResult.quantity;
        this.price = this.getConfirmResult.price;
        this.stockExchangeName = this.getConfirmResult.stockExchangeName;
        this.currentPrice = this.getConfirmResult.currentPrice;
        this.totalPrice = this.getConfirmResult.totalPrice;
        this.totalCurrentprice = this.getConfirmResult.totalCurrentPrice;
      }
    }
    return true;
  }

  /* istanbul ignore next */
  async paymentMent(status) {
    this.userId = localStorage.getItem('userId');
    //this.payConfirmResult = await this._service.confirmedStocks(this.stockIdd);

    if (!this.payConfirmResult) {

    } else {
      this.dialogRef.close('NAN');
      this.route.navigateByUrl('/main/orders');
    }
  }
}

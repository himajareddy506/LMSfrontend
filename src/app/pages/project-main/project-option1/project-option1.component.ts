import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { ProjectDialog1Component } from "../../project-dialog/project-dialog1/project-dialog1.component";
import { CommunicationServiceService } from "../../../service/communication_service/communication-service.service";

export interface PeriodicElement {
  payeeId: string;
  accountNo: string;
  ifsc: number;
  payeeName: string;
}

@Component({
  selector: 'app-project-option1',
  templateUrl: './project-option1.component.html',
  styleUrls: ['./project-option1.component.scss']
})
export class ProjectOption1Component implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'percentage', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: any;
  tabledata: any;
  accountBalance: any;

  responseResult: any;

  constructor(private dialog: MatDialog, private fb: FormBuilder, private _snackBar: MatSnackBar, private _service: CommunicationServiceService) {
  }

  ngOnInit() {
    this.accountBalance = localStorage.getItem('balance');
    this.getDetails();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  async getDetails() {
    //this.tabledata = await this._service.getListOfAvailableStocks();
    /* this.tabledata = [{
       stockId: '1',
       stockName: '2',
       price: 'double',
       quantity: 'Integer',
       stockPercentage: '13.09%',
       trending: 'String',
       stockExchangeName: 'String'
     }, {
       stockId: '1',
       stockName: '2',
       price: 'double',
       quantity: 'Integer',
       stockPercentage: '5.9%',
       trending: 'String',
       stockExchangeName: 'String'
     }, {
       stockId: '1',
       stockName: '2',
       price: 'double',
       quantity: 'integer',
       stockPercentage: 'Integer',
       trending: 'String',
       stockExchangeName: 'String'
     }];*/
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.tabledata);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  buyStock(element, stockName, stockId, stockExchangeName, quantity, price) {
    this.openDialogQuantity(element);
  }

  openDialogQuantity(element): void {
    const dialogRef = this.dialog.open(ProjectDialog1Component, {
      height: '400px',
      width: '600px',
      data: { location: element, fromComponent: 'stocks' }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }
}

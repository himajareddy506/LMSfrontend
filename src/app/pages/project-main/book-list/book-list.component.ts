import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { ProjectDialog1Component } from "../../project-dialog/project-dialog1/project-dialog1.component";
import { CommunicationServiceService } from "../../../service/communication_service/communication-service.service";
import { PeriodicElement } from '../project-option1/project-option1.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'symbol', 'percentage', 'action'];
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

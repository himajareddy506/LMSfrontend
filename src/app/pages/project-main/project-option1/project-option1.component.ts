import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { ProjectDialog1Component } from "../../project-dialog/project-dialog1/project-dialog1.component";
import { CommunicationServiceService } from "../../../service/communication_service/communication-service.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  displayedColumns: string[] = ['Id', 'position', 'name', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: any;
  tabledata: any;
  accountBalance: any;

  responseResult: any;
  userId: number;
  err: boolean;

  constructor(private router: Router,
    private route: Router,
    private http: HttpClient,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _service: CommunicationServiceService) {
  }

  ngOnInit() {
    // this.userId = sessionStorage.getItem('userId');
    // this.getDetails();
    this.http
      .get(environment.baseUrl + '/lms/api/books')
      .subscribe((res: Response) => {
        console.log(res);
        this.dataSource = res['bookList']
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        sessionStorage.setItem("userId", sessionStorage.getItem('userId'));


      }, (err) => {
        this.err = true;
        console.log("rerror", err)
        alert(err.message);
      });
  }



  applyFilter = (filterValue: string) => {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openSnackBar = (message: string, action: string) => {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }



  borrowBook = (element, bookName, author, bookId) => {
    this.openDialogQuantity(element, bookName, author, bookId, 'borrow');
  }

  releaseBook = (element, bookName, author, bookId) => {
    this.openDialogQuantity(element, bookName, author, bookId, 'request');
  }

  addBook = () => {
    this.route.navigate(['/addbook']);
  }
  openDialogQuantity = (element, bookName, author, bookId, action): void => {
    const dialogRef = this.dialog.open(ProjectDialog1Component, {
      height: 'auto',
      width: 'auto',
      data: { location: element, fromComponent: action }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }
}

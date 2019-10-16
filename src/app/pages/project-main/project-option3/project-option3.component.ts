import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ProjectDialog1Component} from "../../project-dialog/project-dialog1/project-dialog1.component";
import {PeriodicElement} from "../project-option1/project-option1.component";
import {CommunicationServiceService} from "../../../service/communication_service/communication-service.service";

@Component({
  selector: 'app-project-option3',
  templateUrl: './project-option3.component.html',
  styleUrls: ['./project-option3.component.scss']
})
export class ProjectOption3Component implements OnInit {
  displayedColumns: string[] = ['position', 'weight', 'name', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: any;
  tabledata: any;
  responseResult: any;
  userId: string

  constructor(private _service: CommunicationServiceService) {
  }

  ngOnInit() {
    this.getDetails();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getDetails() {
    this.userId = localStorage.getItem('userId');
    //this.tabledata = await this._service.getListOfPaidCancelledStocks(this.userId);
    //this.tabledata = this.responseResult.oderList;
    /*this.tabledata = [{
      id: 's',
      stockId: 'Integer',
      quantity: 'Integer',
      price: 'double',
      status: 'String',
      totalPrice: 'double'
    }, {
      id: 's',
      stockId: 'Integer',
      quantity: 'Integer',
      price: 'double',
      status: 'String',
      totalPrice: 'double'
    }, {
      id: 's',
      stockId: 'Integer',
      quantity: 'Integer',
      price: 'double',
      status: 'String',
      totalPrice: 'double'
    }];*/
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.tabledata);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-borrow-history',
  templateUrl: './borrow-history.component.html',
  styleUrls: ['./borrow-history.component.scss']
})

export class BorrowHistoryComponent implements OnInit {
  err: boolean;
  userId: any;
  borrowSummary: any;

  constructor(private router: Router,
    private route: Router,
    private http: HttpClient, ) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.http
      .get(environment.baseUrl + `/lms/api/book/${this.userId}/borrowSummary`)
      .subscribe((res: any) => {
        this.borrowSummary = res.borrowSummaryInfo;
        console.log(res);
        // sessionStorage.setItem("userId", sessionStorage.getItem('userId'));


      }, (err) => {
        this.err = true;
        console.log("rerror", err)
        alert(err.message);
      });
  }
}

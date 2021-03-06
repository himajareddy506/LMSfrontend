import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lend-history',
  templateUrl: './lend-history.component.html',
  styleUrls: ['./lend-history.component.scss']
})
export class LendHistoryComponent implements OnInit {
  err: boolean;
  userId: number;
  lendSummary: object = [];

  constructor(private router: Router,
    private route: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.userId = parseInt(sessionStorage.getItem("userId"));
    this.http
      .get(environment.baseUrl + `/lms/api/book/${this.userId}/lendSummary`)
      .subscribe((res: any) => {
        console.log(res.addedBookInfo);
        this.lendSummary = res.addedBookInfo;
        // sessionStorage.setItem("userId", sessionStorage.getItem('userId'));


      }, (err) => {
        this.err = true;
        console.log("rerror", err)
        alert(err.message);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-landing',
  templateUrl: './project-landing.component.html',
  styleUrls: ['./project-landing.component.scss']
})
export class ProjectLandingComponent implements OnInit {
  // showScreen:boolean = false;
  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  openDialog = (load) => {
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

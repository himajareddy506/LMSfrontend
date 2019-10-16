import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  otherTheme: boolean = false;
  userName: string;
  mobile: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private dialog: MatDialog) {
    /* istanbul ignore next */
    this.mobile = window.screen.width === 360;
    /* istanbul ignore next */
    this.userName = localStorage.getItem('userName');
  }

  /* istanbul ignore next */
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  /*openDialog(): void {
    const dialogRef = this.dialog.open('', {
      height: '400px',
      width: '600px',
      data: {name: 'prasath', animal: 'lion'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }*/

  /* istanbul ignore next */
  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }


}

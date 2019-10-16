import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material";
import {By} from "@angular/platform-browser";
import {CommunicationServiceService} from "../../service/communication_service/communication-service.service";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let s;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([])],
      declarations: [NavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    s = component.changeTheme();
  });

  it('should create main module component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the theme method', () => {
    // @ts-ignore
    const comp = new NavbarComponent();
    var result = comp.changeTheme();
    console.log("okokokok", result);
    expect(result).toBe(false);
  });

  it('should create main module component', () => {
    const element = fixture.debugElement.query(By.css("#changetheme"));
    element.triggerEventHandler("click", null);
    fixture.detectChanges();
  });

  it('should create main module component', () => {
    expect(s).toBe(false);
  });

  it('should test a component', () => {
    fixture.detectChanges();
    expect(component.logout).toBe(true);
  });


});

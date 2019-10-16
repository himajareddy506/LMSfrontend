import {TestBed, inject} from '@angular/core/testing';

import {AuthGuardGuard} from './auth-guard.guard';

describe('AuthGuardGuard', () => {
  let component: AuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardGuard]
    });
  });

  it('should create the guard for protection', inject([AuthGuardGuard], (guard: AuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));

  /*it('should navigate to properly based on the authorization', () => {
    expect(component.canActivate()).toBe(true);
  });*/

});

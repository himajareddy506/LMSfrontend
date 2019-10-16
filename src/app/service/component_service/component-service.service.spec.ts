import { TestBed } from '@angular/core/testing';

import { ComponentServiceService } from './component-service.service';

describe('ComponentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should create a component data service', () => {
    const service: ComponentServiceService = TestBed.get(ComponentServiceService);
    expect(service).toBeTruthy();
  });
});

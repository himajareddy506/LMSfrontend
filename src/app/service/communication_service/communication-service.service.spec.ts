import {TestBed} from '@angular/core/testing';

import {CommunicationServiceService} from './communication-service.service';
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";

describe('CommunicationServiceService', () => {
  //let service: CommunicationServiceService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be create data service', () => {
    const service: CommunicationServiceService = TestBed.get(CommunicationServiceService);
    expect(service).toBeTruthy();
  });

  it('should get a list of service', () => {
    const service: CommunicationServiceService = TestBed.get(CommunicationServiceService);
    return service.getObjects('1','2').then(function (result) {
      expect(result).toBeFalsy();
    });
  });


});

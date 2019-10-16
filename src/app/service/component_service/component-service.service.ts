import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {
  private messageSource = new BehaviorSubject('NAN');

  // Method for Receiving data in the component
  currentMessage = this.messageSource.asObservable();

  //use this in the component
  // this.data.currentMessage.subscribe(message => this.messagefromservice = message);

  constructor() { }

  //Method for sending data to this service
  changeMessage(message) {
    this.messageSource.next(message);
  }

}

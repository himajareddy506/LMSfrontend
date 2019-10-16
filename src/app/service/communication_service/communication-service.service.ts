import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CommunicationServiceService {
  itemListEnvName: any;

  constructor(private http: HttpClient) {

  }

  //Post Method
  postObjects(path, body) {
    interface UserResponse {
      success: boolean;
      message: any;
    }

    // const headers = new HttpHeaders(environment.headerKey);
    /*  const body = JSON.stringify({
        'loginName': form.userId,
        'password': form.password
      });*/

    return new Promise(resolve => {
      this.http.post(environment.baseUrl + 'login/', body, { observe: 'response' })
        /* istanbul ignore next */
        .subscribe((response: HttpResponse<UserResponse>) => {
          /* istanbul ignore next */
          if (response.status === 201) {
            resolve(response.body);
          } else {
            resolve(false);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }


  // Get Method
  getObjects(path, parameter) {
    // const headers = new HttpHeaders(environment.headerKey);
    return new Promise(resolve => {
      this.http.get(environment.baseUrl + 'stocks?tranding=true', { observe: 'response' })
        /* istanbul ignore next */
        .subscribe(response => {
          /* istanbul ignore next */
          if (response.status === 200) {
            resolve(response.body);
          } else {
            resolve(false);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }


}

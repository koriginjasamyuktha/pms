import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from 'src/app/core/services/base.service';

import { PMS } from 'src/app/core/constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class PmsService extends BaseService {
  /*********************Properties*********************/

 /*********************Properties*********************/

 /*********************Constructor*********************/
  constructor(protected http: HttpClient) {
    super(http);
   }
/*********************Constructor*********************/

/*********************Service Methods*********************/

postPatient(request) {
  // const HeaderData = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':token }) };
  return this.http.post(PMS.PmsPostApi , request);
}

/*********************Service Methods*********************/
}
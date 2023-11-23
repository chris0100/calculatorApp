import { Injectable } from '@angular/core';
import {RequestOperation} from "../interfaces/requestOperation.interface";
import {Record} from "../interfaces/record.interface";

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  public records: Record[] = [];


  sendOperation(request: RequestOperation) {
    // mock the response
    const newRecord: Record = {
      id: 1,
      amount: '23',
      userBalance: 10,
      operationResponse: true,
      date: '20 nov 2023',
      userId: 1,
      operationId: 2,
    }
    this.records.push(newRecord);
  }
}

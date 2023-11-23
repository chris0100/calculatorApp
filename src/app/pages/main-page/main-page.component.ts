import { Component } from '@angular/core';
import {RequestOperation} from "../../interfaces/requestOperation.interface";
import {CalculateService} from "../../services/calculate.service";
import {Record} from "../../interfaces/record.interface";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private calculateService: CalculateService) {
  }

  get records(): Record[] {
    return [...this.calculateService.records];
  }

  onSendOperation(request: RequestOperation) {
    // call to the service
    this.calculateService.sendOperation(request);
  }
}

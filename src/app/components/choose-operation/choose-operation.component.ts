import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-operation',
  templateUrl: './choose-operation.component.html',
  styleUrls: ['./choose-operation.component.css']
})
export class ChooseOperationComponent {

  selectedOperation: string = '';

  useOperation(value: string): void {
    if(this.selectedOperation === value){
      this.selectedOperation = '';
      return;
    }
    this.selectedOperation = value;
  }
}

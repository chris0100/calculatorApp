import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-apply-operation',
  templateUrl: './apply-operation.component.html',
  styleUrls: ['./apply-operation.component.css']
})
export class ApplyOperationComponent {

  selectedOperation: string = '';

  useCancel(value: boolean): void {
    this.selectedOperation = '';
  }


  useOperation(value: string): void {
    if(this.selectedOperation === value){
      this.selectedOperation = '';
      return;
    }
    this.selectedOperation = value;
  }
}

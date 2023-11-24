import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RequestOperation} from "../../interfaces/requestOperation.interface";

@Component({
  selector: 'app-apply-operation',
  templateUrl: './apply-operation.component.html'
})
export class ApplyOperationComponent {

  @Output()
  onSendOperation: EventEmitter<RequestOperation> = new EventEmitter();

  selectedOperation: string = '';
  public request: RequestOperation = {
    valueOne: 0,
    valueTwo: 0,
  }

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

  sendOperation() {
    console.log(this.request);
    this.onSendOperation.emit(this.request);

    //clean up
    this.request = {valueOne:0, valueTwo: 0};
  }

  validateEnabled(): boolean {
    return (this.selectedOperation == 'division' && this.request.valueTwo === 0) ||
      (this.request.valueOne === null) ||
      (this.request.valueTwo === null);
  }
}

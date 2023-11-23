import {Component, Input} from '@angular/core';
import {Record} from "../../interfaces/record.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public recordList: Record[] = [];

}

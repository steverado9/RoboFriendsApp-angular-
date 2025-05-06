import { Component, EventEmitter, Output, } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RobotService } from '@app/services/robot.service';



@Component({
  selector: 'app-search-box',
  imports: [FormsModule, ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  value: string = '';
  
  @Output() valueChange = new EventEmitter<string>();

  constructor (private robotService : RobotService) {}

  onChange() {
    console.log(this.value);
    const message = this.value;
    this.robotService.changeMessage(message);
  }
}

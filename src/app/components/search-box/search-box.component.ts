import { Component } from '@angular/core';
import { log } from 'console';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-box',
  imports: [FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  value: string = '';
  


  onChange() {
    console.log(this.value);
  }
}

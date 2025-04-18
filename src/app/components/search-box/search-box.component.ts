import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  onChange() {
    console.log($event.target.value);
  }
}

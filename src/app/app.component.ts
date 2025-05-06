import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CardComponent, SearchBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
    items!: any[];
    constructor(private robotService: RobotService) { }
  
    ngOnInit(): void {
      this.fetchAPi();
      // this.getValueOfSearchBox();
    }
  
    fetchAPi() {
      this.robotService.getData().subscribe(res => {
        this.items = res;
      })
    }
}

import { Component, OnInit } from '@angular/core';
import { RobotService } from '../../services/robot.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})

export class CardComponent {
  data!: any[];
  constructor(private robotService: RobotService) { }

  ngOnInit(): void {
    this.fetchAPi();
    // this.getValueOfSearchBox();
  }

  fetchAPi() {
    this.robotService.getData().subscribe(res => {
      this.data = res;
    })
  }

  getValueOfSearchBox() {
    this.robotService.currentMessage.subscribe(
      (msg) => {
        console.log('cardlist message', this.data);
        this.data = this.data.filter(item => {
          return item.name.toLowerCase().includes(msg.toLowerCase())
        })
        console.log('cardlist message', this.data);
      }
    )
  }
}







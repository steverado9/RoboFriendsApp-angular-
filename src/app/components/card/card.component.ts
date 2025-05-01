import { Component, inject } from '@angular/core';
import { RobotService } from '../../services/robot.service';



@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  providers: [{ provide: RobotService, useValue: { emoji: '🌻' } }]
})

export class CardComponent {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  flower = inject(RobotService);

}

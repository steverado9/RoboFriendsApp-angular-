import { Injectable, inject } from '@angular/core';
import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotService {
  emoji = '🌺';
  private http = inject(HttpClient);

  constructor() { }
}

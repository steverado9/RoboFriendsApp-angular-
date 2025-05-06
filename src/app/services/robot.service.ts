import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RobotService {
  url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http : HttpClient) {}
  
  getData(): Observable<any> {
    return this.http.get(this.url)
  }

  private messageSource = new BehaviorSubject<string>('Default Message');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

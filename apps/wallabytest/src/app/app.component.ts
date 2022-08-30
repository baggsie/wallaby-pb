import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@wallaby-test/api-interfaces';

@Component({
  selector: 'wallaby-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}

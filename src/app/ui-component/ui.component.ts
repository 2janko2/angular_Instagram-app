import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

interface Response {
  addedDate: string,
  id: string,
  order: string,
  title: string
}

@Component({
  selector: 'inst-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  todos: Response[] = [];
  constructor(private loggerService: LoggerService, private http: HttpClient) { }

  handleClick() {
    this.loggerService.generateLogWithColor('Successfully generated message', "background: green; color: red")
  }

  ngOnInit() {
    this.http.get<Response[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
      withCredentials: true,
      headers: {
        'api-key': '35c71d6c-4204-45d4-8704-3f88d800f4b0'
      }
    }).subscribe((response: Response[]) => {
      debugger;
      this.todos = response;
    })
  }


}

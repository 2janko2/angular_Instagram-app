import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService, StandardResponse } from '../api.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'inst-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  todos: StandardResponse[] = [];
  error = ''
  constructor(private loggerService: LoggerService, private apiService: ApiService) { }

  handleClick() {
    this.loggerService.generateLogWithColor('Successfully generated message', "background: green; color: red")
  }

  ngOnInit() {
    this.apiService.getList()
      .subscribe({
        next: (response: StandardResponse[]) => {
          this.todos = response;
        },
        error: (error) => {
          this.error = error;
        },
        complete: () => {
          console.log("Complete finished");
        }
      })
  }
}

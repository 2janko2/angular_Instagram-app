import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService, StandardResponse } from '../api.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'inst-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  todos: StandardResponse[] = [];

  subscriptions: Subscription = new Subscription()

  error = ''

  constructor(private loggerService: LoggerService, private apiService: ApiService) { }

  handleClick() {
    this.loggerService.generateLogWithColor('Successfully generated message', "background: green; color: red")
  }

  ngOnInit() {
    this.subscriptions.add(this.apiService.getList()
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
      }))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

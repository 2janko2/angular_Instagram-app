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
  constructor(private loggerService: LoggerService, private apiService: ApiService) { }

  handleClick() {
    this.loggerService.generateLogWithColor('Successfully generated message', "background: green; color: red")
  }

  ngOnInit() {
    this.apiService.getList().subscribe((response: StandardResponse[]) => {
      this.todos = response;
    })
  }


}

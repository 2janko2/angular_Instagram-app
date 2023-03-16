import { Injectable } from '@angular/core';

interface LogColorsBunch {
  background: string,
  color: string,
}

@Injectable({
  providedIn: 'root'
})

export class LoggerService {
  constructor() { }
  
  generateLogWithColor(message: string, styles: string ) {
    console.log(`${styles}`);
    console.log(`%c${message}`, `${styles}`);
    console.log("%cExtra Large Yellow Text with Red Background", "background: red; color: yellow; font-size: x-large");
  }
}

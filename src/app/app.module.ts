import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './testComponents/header.component';
import { SecondTestComponent } from './second-test/second-test.component';

// Modules are separate complete pages which we cannot reuse somewhere else
// We need to create shared modules for reused components then

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondTestComponent
    // here we should write out components which we use in our app
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

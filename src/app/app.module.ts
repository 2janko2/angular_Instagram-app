import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './components/header.component';
import {VacancyCardComponent} from './vacancy-card/vacancy-card.component';
import {DirectivesComponent} from './directives/directives.component';
import { UiComponent } from './ui-component/ui.component';

// Modules are separate complete pages which we cannot reuse somewhere else
// We need to create shared modules for reused components then

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        VacancyCardComponent,
        DirectivesComponent,
        UiComponent,
        // here we should write out components which we use in our app
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

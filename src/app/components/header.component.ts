import { Component } from '@angular/core';

@Component({
    selector: 'inst-header-component',
    // selector - the name which we should take from
    templateUrl: './header.component.html',
    // templateUrl is our MarkUp storage, which we need want to link
    styleUrls: ['header.component.scss'],
    // styleUrls - is an array of styles which we want to apply to our component.
    // We cann apply as many styles as we want
})
export class HeaderComponent {
    headerTitle = 'To Do List';
}

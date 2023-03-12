import { Component } from '@angular/core';

@Component({
    selector: 'inst-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'instagram';
    headerComponentTitle = 'To Do List';
    dislikeImgSrc = '../../assets/vacancyCard/dislike.svg';

    vacancyDislikePressed(item: string) {
        debugger;
        this.dislikeImgSrc = item;
    }
}

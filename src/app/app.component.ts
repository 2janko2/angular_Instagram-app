import {Component} from '@angular/core';

@Component({
    selector: 'inst-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'instagram';
    headerComponentTitle = 'To Do List';
    dislikeImgSrc = false;
    favoriteVacancyImgPath = false;

    vacancies = [
        {
            labelTitle: 'New',
            content: "'Sales Manager(Shopping Mall 'Krab', Shopping Mall 'Reew Gosh', Shopping Mall 'New Way')'",
            contentSubtitle: '10 000 - 15 000$ per month',
            contentSubtitleAlias: '+ 15% Welcome Bonus',
            contentLocation: 'Sidney',
            contentCompany: 'FISHKI.UA',
            benefitsMeals: 'Free meals',
            benefitsTime: 'Flexible Schedule',
            benefitsGym: 'Gym Ticket',
            footerTiming: '37 min. ago',
            dislikeImgSrc: this.dislikeImgSrc,
            favoriteVacancyImgPath: this.favoriteVacancyImgPath,
            dislikeEvent: this.vacancyDislikePressed,
            makeFavorite: this.addVacancyToFavorite,
        },
        {
            labelTitle: 'Old',
            content: 'AI Developer',
            contentSubtitle: '1000 - 1500$ per month',
            contentSubtitleAlias: '+ 1% Welcome Bonus',
            contentLocation: 'Tokio',
            contentCompany: 'Samchon.JA',
            benefitsMeals: 'Free meals',
            benefitsTime: 'Fixed Schedule',
            benefitsGym: 'Transport Ticket',
            footerTiming: '30 days ago',
            dislikeImgSrc: this.dislikeImgSrc,
            favoriteVacancyImgPath: this.favoriteVacancyImgPath,
            dislikeEvent: this.vacancyDislikePressed,
            makeFavorite: this.addVacancyToFavorite,
        },
    ];

    constructor() {
        console.log(this.vacancies);
    }

    vacancyDislikePressed() {
        this.dislikeImgSrc = !this.dislikeImgSrc;
        console.log(this.vacancies);
    }

    addVacancyToFavorite() {
        this.favoriteVacancyImgPath = !this.favoriteVacancyImgPath;
    }
}

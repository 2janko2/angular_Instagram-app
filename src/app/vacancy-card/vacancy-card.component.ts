import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'inst-vacancy-card',
    templateUrl: './vacancy-card.component.html',
    styleUrls: ['./vacancy-card.component.scss'],
})
export class VacancyCardComponent {
    @Input() labelTitle?: string;
    @Input() content?: string;
    @Input() contentSubtitle?: string;
    @Input() contentSubtitleAlias?: string;
    @Input() contentLocation?: string;
    @Input() contentCompany?: string;
    @Input() benefitsMeals?: string;
    @Input() benefitsTime?: string;
    @Input() benefitsGym?: string;
    @Input() footerTiming?: string;
    @Input() dislikeImgSrc?: string;

    @Output() dislikeEvent = new EventEmitter<string>();
    output = '';

    handleReply() {
        alert('Thanks for your reply');
    }

    handleInputValue(event: Event) {
        this.output = (event.currentTarget as HTMLInputElement).value;
    }

    dislikeHandler() {
        debugger;
        this.dislikeEvent.emit('../../assets/vacancyCard/dislikeClicked.svg');
    }
}

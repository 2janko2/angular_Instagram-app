import {Component, EventEmitter, Input, Output} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {ValueService} from 'src/value.service';

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
    @Input() dislikeImgSrc?: boolean;
    @Input() favoriteVacancyImgPath?: boolean;

    @Output() dislikeEvent = new EventEmitter();
    @Output() makeFavorite = new EventEmitter();
    
    output = '';

    testValue$ = new Observable();

    constructor(private valueService: ValueService) {}

    ngOnInit() {
        this.testValue$ = this.valueService.value$
    }

    handleInc() {
        this.valueService.inc()
    }


    handleDec() {
        this.valueService.dec()
    }

    handleReply() {
        alert('Thanks for your reply');
    }

    handleInputValue(event: Event) {
        this.output = (event.currentTarget as HTMLInputElement).value;
    }

    dislikeHandler() {
        this.dislikeEvent.emit();
    }

    makeVacancyFavorite() {
        this.makeFavorite.emit();
    }
}

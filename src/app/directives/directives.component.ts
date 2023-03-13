import {Component} from '@angular/core';

interface Fruit {
    id: string;
    name: string;
    price: number;
}

@Component({
    selector: 'inst-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
    fruits: Fruit[] = [
        {id: '1', name: 'apple', price: 16},
        {id: '2', name: 'orange', price: 2},
        {id: '3', name: 'watermelon', price: 12},
        {id: '4', name: 'peach', price: 3},
        {id: '5', name: 'carrot', price: 1},
        {id: '6', name: 'cucumber', price: 5},
        {id: '7', name: 'tomato', price: 9},
        {id: '8', name: 'rospberry', price: 8},
        {id: '9', name: 'pineapple', price: 100},
    ];
}

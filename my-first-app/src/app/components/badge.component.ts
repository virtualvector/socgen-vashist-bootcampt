import { Component } from '@angular/core';

@Component({
    selector: 'app-badge',
    template: `
        <button type="button" class="btn btn-primary" (click)="incrementCount()" >
            Votes <span class="badge badge-light">{{count}}</span>
        </button>
    `
})

export class BadgeComponent{
    count: number= 0;

    incrementCount(){
        this.count++
    }

}
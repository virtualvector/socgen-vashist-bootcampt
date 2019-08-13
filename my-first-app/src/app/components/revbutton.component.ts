import { Component, Input } from '@angular/core';

@Component({
    selector: 'rev-button',
    template: `
    <button type="button" class="btn btn-primary" (click)="reverse()">
           {{caption}}
    </button>
    
    `
})
export class RevButtonComponent{
    @Input('caption') caption : string = ''

    reverse(){
        this.caption = this.caption.split('').reverse().join('')
    }

}
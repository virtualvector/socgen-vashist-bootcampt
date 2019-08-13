import { Component } from "@angular/core";

@Component({
    selector: 'app-test',
    template: `
        <h2>{{title}}</h2>
    
    `
})
export class TestComponent{
    title: string = "Test Component"
}
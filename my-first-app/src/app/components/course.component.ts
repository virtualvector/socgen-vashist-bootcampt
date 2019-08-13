import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-course',
    templateUrl: 'course.component.html'
})
export class CourseComponent implements OnInit {

    @Input('title')title: string = 'Default'
    @Input('text')summary: string = 'Default'

    constructor() { }

    ngOnInit() { 

    }

}
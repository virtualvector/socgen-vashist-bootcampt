import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../services/course.service';
import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'add-course',
    template: `
        <h2>Add Course - {{today | date: 'yy/MM/d'}}</h2>
        <div *ngIf="message" class="alert alert-success" role="alert">
            {{message}}
        </div>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Title</span>
        </div>
        <input type="text" #title (change)="0" class="form-control" placeholder="Enter Title" aria-label="Username" aria-describedby="basic-addon1"> 
        </div>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Summary</span>
        </div>
        <input type="text" #summary (change)="0" class="form-control" placeholder="Enter Summary" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <button type="button" class="btn btn-primary" (click)="addCourse(title.value, summary.value)">Add Course</button>
        </div>
    `
})
export class AddCourseComponent implements OnInit {

    message: string = ''
    today: Date = new Date();

    constructor(private courseService: CourseService, private loggerService: LoggerService) { }

    ngOnInit() { 

    }

    addCourse(title:string, summary:string){
        console.log(title, summary)
        this.loggerService.log(title)
        this.loggerService.log(summary)

        let body = {title, summary}

        // this.http.post('http://localhost:3000/courses', body).toPromise()
        this.courseService.addCourse(body)
        .then((res) =>{
            console.log(res)
            this.message = "Successfully inserted course!!"
        })
    }

}
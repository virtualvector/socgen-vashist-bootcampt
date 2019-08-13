import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../services/course.service';
import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'delete-course',
    template: `
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Id</span>
        </div>
        <input type="number" #id (change)="0" class="form-control" placeholder="Enter Id" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <button type="button" class="btn btn-primary" (click)="deleteCourse(id.value)">Delete Course</button>
    </div>
    `
})
export class DeleteCourseComponent implements OnInit {

    constructor(private courseService: CourseService, private loggerService: LoggerService) { }

    ngOnInit() { 

    }

    deleteCourse(id: number){
        this.loggerService.log(id+ '')
        this.courseService.deleteCourse(id)
        .then((res) =>{
            console.log(res)
            
        })
    }

}
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { LoggerService } from '../services/logger.service';
import { Course } from '../models/course';

@Component({
    selector: 'view-courses',
    templateUrl: 'view-courses.component.html'
})
export class ViewCourseComponent implements OnInit {


    constructor(private courseService: CourseService, private loggerService: LoggerService){

    }
    ngOnInit(){
        // Initialization code.
        console.log('Initialization code!!')
        // this.http.get('http://localhost:3000/courses').toPromise()
        this.courseService.findAllCourses()
        .then((res:Array<Course>) =>{
          this.courses = res;
        })
      }
    
      displayLogs(){
        this.loggerService.printlogs();
      }
    
      courses: Array<Course> = []
      title = 'Our first project in Angular';

}
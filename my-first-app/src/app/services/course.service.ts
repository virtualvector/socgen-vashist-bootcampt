import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';


const baseUrl: string = 'http://localhost:3000/courses/'
@Injectable()
export class CourseService {
    
    constructor(private http: HttpClient) { }

    findAllCourses(): Promise<any>{
       return this.http.get(baseUrl).toPromise()
    }

    addCourse(course: Course): Promise<any>{
       return this.http.post(baseUrl, course).toPromise()
    } 

    deleteCourse(id: number): Promise<any>{
       return this.http.delete(baseUrl +id).toPromise()
    }

}
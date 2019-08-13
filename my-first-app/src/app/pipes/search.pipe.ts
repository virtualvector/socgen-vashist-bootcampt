import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(courses: Array<Course>, arg?: string) {
        console.log(courses);
        let filteredCourses = courses.filter((course)=> course.title.startsWith(arg));
        console.log(filteredCourses)
        return filteredCourses;
    }

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { BadgeComponent } from './components/badge.component';
import { RevButtonComponent } from './components/revbutton.component';
import { CourseComponent } from './components/course.component';
import { AddCourseComponent } from './components/add-course.component';
import { DeleteCourseComponent } from './components/delete-course.component';
import { CourseService } from './services/course.service';
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { LoggerService } from './services/logger.service';
import { ViewCourseComponent } from './components/view-courses.component';

const routes : Routes = [
  {path: '', component:ViewCourseComponent},
  {path: 'add', component:AddCourseComponent},
  {path: 'delete', component:DeleteCourseComponent}
]

@NgModule({
  declarations: [
    AppComponent, TestComponent, BadgeComponent, RevButtonComponent, CourseComponent, AddCourseComponent, ViewCourseComponent, DeleteCourseComponent, ReversePipe, SearchPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [CourseService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

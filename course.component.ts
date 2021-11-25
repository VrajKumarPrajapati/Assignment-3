import { Component, OnInit } from '@angular/core';
import { Course } from '../courseInfo';
import { Course_Intro } from 'src/assets/Data/myCourses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  myCourses = Course_Intro;
  courseInfo = Course;

  Clicked: boolean[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ClickMe(i: any){
    this.Clicked[i] = !this.Clicked[i];
  }

}

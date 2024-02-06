import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Courses } from './models/index';


let courses: Courses[] = [
  {
    id: 1,
    courseName: 'Curso 1',
    startDate: new Date(),
  },
  {
    id: 2,
    courseName: 'Curso 2',
    startDate: new Date(),
  },
  {
    id: 3,
    courseName: 'Curso 3',
    startDate: new Date(),
  },
];


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses() {
    return of(courses).pipe(delay(1500));
  }

  deleteCourseById(id: number){
    courses = courses.filter((el)=> el.id != id);
    return this.getCourses();
  }
  createCourse(data: Courses){
    courses = [...courses, {...data, id: courses.length + 1}];
    return this.getCourses();
  }
  updateCourseById(id:number, data: Courses){
    courses = courses.map((el)=> (el.id === id ? {...el,...data} : el));
    return this.getCourses();
  }
}

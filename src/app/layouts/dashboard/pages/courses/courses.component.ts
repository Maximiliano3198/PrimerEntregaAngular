import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Courses } from './models';
import { LoadingService } from '../../../../core/services/loading.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  displayedColumns = ['id', 'courseName', 'startDate', 'actions'];

  
  courses: Courses[] = []
  constructor(private coursesService: CoursesService, private loadingService: LoadingService,public dialog: MatDialog){

    this.loadingService.setIsLoading(true);

    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      complete: ()=>{
        this.loadingService.setIsLoading(false)
      }
    })
  }

onCreate(): void{
  this.dialog.open(CoursesFormComponent).afterClosed().subscribe({
    next: (result) => {
      if (result){
        this.coursesService.createCourse(result).subscribe({
          next: (courses) => (this.courses = courses),
          complete: ()=>{
            this.loadingService.setIsLoading(false)
          }
        })
      }
    },
  });
}

onEdit(course: Courses){
  this.dialog.open(CoursesFormComponent,{
    data: course,
  }).afterClosed()
  .subscribe({
    next: (result) => {
      if (result) {
        this.coursesService
          .updateCourseById(course.id, result)
          .subscribe({
            next: (courses) => (this.courses = courses),
            complete: ()=>{
              this.loadingService.setIsLoading(false)}
          });
      }
    },
  })
}

  onDelete(element: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar el curso de ${element.courseName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCourse(element.id);
      }
    });
  }

  deleteCourse(id: number): void {
    this.loadingService.setIsLoading(true);
    this.coursesService.deleteCourseById(id).subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    });
  }


}

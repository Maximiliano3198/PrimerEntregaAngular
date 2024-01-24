import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { CoursesModule } from './pages/courses/courses.module';
import { StudentsModule } from './pages/students/students.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    CoursesModule,
    StudentsModule,
    CategoriesModule,
    SharedModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule { }

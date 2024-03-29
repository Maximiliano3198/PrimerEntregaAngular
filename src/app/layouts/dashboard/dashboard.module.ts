import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { StudentsModule } from './pages/students/students.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/users/pages/user-detail/user-detail.component';
import { CoursesModule } from './pages/courses/courses.module';
import { CoursesRoutingModule } from './pages/courses/courses-routing.module';



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
    CoursesRoutingModule,
    StudentsModule,
    CategoriesModule,
    SharedModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    MatListModule,

    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path:'courses',
        loadChildren: ()=> 
        import('./pages/courses/courses.module').then(
          (m) => m.CoursesModule
        ),
      },
      {
        path: 'users/:id',
        component: UserDetailComponent,
      },
      {
        path: '',
        component: HomeComponent
      },
    ]),
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule { }

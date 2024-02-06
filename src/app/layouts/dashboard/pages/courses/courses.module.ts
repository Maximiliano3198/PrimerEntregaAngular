import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
  ],
})
export class CoursesModule { }

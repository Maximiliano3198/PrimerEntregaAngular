import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AdminNamePipe } from './pipes/admin-name.pipe';
import { HeadlineDirective } from './directives/headline-directive';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    FormErrorsPipe,
    AdminNamePipe,
    HeadlineDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormErrorsPipe,
    MatTableModule,
    AdminNamePipe,
    HeadlineDirective,
    MatOptionModule,
    MatDatepickerModule,
  ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatTableModule} from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }

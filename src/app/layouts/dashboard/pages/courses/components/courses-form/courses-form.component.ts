import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { Courses } from '../../models';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss'],
  providers: [provideNativeDateAdapter()],
})
export class CoursesFormComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private dialogRef: MatDialogRef<CoursesFormComponent>, 
    private loadingService: LoadingService,
    @Inject(MAT_DIALOG_DATA) private editingCouse?:Courses
    ) { 

    this.courseForm = this.fb.group({
    courseName: ['', Validators.required],
    startDate: ['', Validators.required],
  });

  if(editingCouse){
    this.courseForm.patchValue(editingCouse)
  }
}

onSave(): void {
  this.dialogRef.close(this.courseForm.value);
  this.loadingService.setIsLoading(true);
}
onCancel(): void {
  this.dialogRef.close(); 
}
}
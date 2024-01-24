import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

  userForm: FormGroup;

  @Output() userSubmitted: EventEmitter<User> = new EventEmitter<User>();


  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<UserFormComponent>) {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      role: this.fb.control('', Validators.required),
    })
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.userSubmitted.emit(this.userForm.value);
      this.matDialogRef.close();
    }
  }

  cancelar(): void {
    this.matDialogRef.close(); 
  }
}

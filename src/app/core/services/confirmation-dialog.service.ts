// confirmation-dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  private dialogRef: MatDialogRef<any>;

  setDialogRef(dialogRef: MatDialogRef<any>): void {
    this.dialogRef = dialogRef;
  }

  getDialogRef(): MatDialogRef<any> {
    return this.dialogRef;
  }
}

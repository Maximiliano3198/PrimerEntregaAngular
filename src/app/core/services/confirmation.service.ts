// confirmation.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  private dialogRef: any; // Variable para almacenar la referencia del cuadro de diálogo

  constructor(private dialog: MatDialog) {}

  openConfirmationModal(message: string): Observable<boolean> {
    const confirmationResultSubject = new Subject<boolean>();

    this.dialogRef = this.dialog.open({
      data: { message },
      template: `
        <h2 mat-dialog-title>Confirmar eliminación</h2>
        <mat-dialog-content>
          <p>{{ data.message }}</p>
        </mat-dialog-content>
        <mat-dialog-actions>
          <button mat-button (click)="dialogRef.close(false)">No</button>
          <button mat-button (click)="dialogRef.close(true)" cdkFocusInitial>Sí, eliminar</button>
        </mat-dialog-actions>
      `,
      disableClose: true,
    });

    this.dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      confirmationResultSubject.next(!!result);
    });

    return confirmationResultSubject.asObservable();
  }

  // Método para cerrar manualmente el cuadro de diálogo desde fuera del servicio
  closeConfirmationModal(result: boolean): void {
    if (this.dialogRef) {
      this.dialogRef.close(result);
    }
  }
}

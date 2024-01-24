import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminNamePipe } from '../../shared/pipes/admin-name.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  constructor(public dialogRef: MatDialog, private sanitizer: DomSanitizer) {}

  nombreIngresado: string = '';
  nombreMostrado: SafeHtml | undefined;
  mostrarInput = true;

  mostrarResultado(): void {
    if (this.nombreIngresado) {
      const adminNamePipe = new AdminNamePipe(this.sanitizer);
      this.nombreMostrado = adminNamePipe.transform(this.nombreIngresado);
      this.mostrarInput = false;
    }
  }
}

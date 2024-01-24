import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'adminName'
})
export class AdminNamePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return '';
    const adminSuffix = '(Admin)';
    const sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(`<span style="color: black">${value}</span><span style="color: gray">${adminSuffix}</span>`);
    return sanitizedHtml;
  }
}


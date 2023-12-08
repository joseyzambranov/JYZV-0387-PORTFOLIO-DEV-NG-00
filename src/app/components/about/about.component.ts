import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from "@angular/common"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(@Inject(DOCUMENT) document: any ) { }

  getPdfUrl(): string {
    let urlSegments = document.location.href.split("/")
    let language = urlSegments[3] || 'es';;
    let pdfFileName = `portfolio-${language}.pdf`; // Asegúrate de tener archivos PDF con nombres correspondientes

    return `./assets/pdf/${pdfFileName}`;
  }
}

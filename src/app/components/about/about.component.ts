import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private location: Location) { }

  getPdfUrl(): string {
    let urlSegments = this.location.path().split('/')
    let language = urlSegments[1] || 'es';
    console.log(language)
    let pdfFileName = `portfolio-${language}.pdf`; // Asegúrate de tener archivos PDF con nombres correspondientes

    return `./assets/pdf/${pdfFileName}`;
  }
}

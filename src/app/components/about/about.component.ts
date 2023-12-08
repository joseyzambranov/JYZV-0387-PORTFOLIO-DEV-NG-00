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
    const language = this.location.path().split('/')[1]; // Obtén el idioma de la URL
    const pdfFileName = `portfolio-${language}.pdf`; // Asegúrate de tener archivos PDF con nombres correspondientes

    return `./assets/pdf/${pdfFileName}`;
  }
}

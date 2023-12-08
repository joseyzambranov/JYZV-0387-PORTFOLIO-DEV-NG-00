import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router ) { }

  getPdfUrl(): string {
    let urlSegments = this.router.url
    let language = urlSegments;
    console.log(language)
    console.log();
    let pdfFileName = `portfolio-${language}.pdf`; // Asegúrate de tener archivos PDF con nombres correspondientes

    return `./assets/pdf/${pdfFileName}`;
  }
}

import { Component, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(@Inject(DOCUMENT) document: any ) { }

  getUrl(): string {
    let urlSegments = document.location.href.split("/")
    let language = urlSegments[3] || 'es';;
    return language;
  }


  getPdfUrl(): string {
    let language = this.getUrl()
    let pdfFileName = `jose-zambrano-${language}.pdf`;

    return `./assets/pdf/${pdfFileName}`;
  }

  getImgfUrl(): string {
    let language = this.getUrl()
    let pdfFileName = `Diagram_${language}.svg`;
    return `./assets/img/${pdfFileName}`;
  }
}

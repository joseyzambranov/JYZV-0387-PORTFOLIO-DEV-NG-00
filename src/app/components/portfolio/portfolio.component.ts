import { Component ,Inject} from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';
import { DOCUMENT } from "@angular/common"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(@Inject(DOCUMENT) document: any ) { }
  config: SwiperOptions = {
    
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  slides = [
    {
      link: 'https://reservas.surcotenis.pe/#/reserve',
      image: 'https://surcotenis.pe/wp-content/uploads/2023/08/Captura-removebg-preview-300x151.png',
      title: 'Reservas surco tenis',
      description: 'Proyecto colaborativo el cual estuve encargado de la lógica de reservas y pasarela de pagos, la solución está construido con node, express ,mysql',
      title_en: 'Tennis groove reservations',
      description_en: 'Collaborative project in which I was in charge of the reservation logic and payment gateway, the solution is built with node, express, mysql',
    },
    {
      link: 'https://joseyzambranov.github.io/expense-control/',
      image: 'https://josezambrano.netlify.app/assets/img/MacBook%20Pro%2014_%20-%201%20(1).png',
      title: 'Control de Gasto',
      description: 'Aplicación fullstack realizada con React, Redux, Node.js, Express y MongoDB. Controla tus gastos en tres pasos: crea un plan, regístrate e ingresa tus gastos diariamente.',
      title_en: 'Expense Control',
      description_en: 'Fullstack application made with React, Redux, Node.js, Express and MongoDB. Control your expenses in three steps: create a plan, register and enter your expenses daily.',
    },
    {
      link: 'https://jose-zambrano.itch.io/goodideas',
      image: 'https://josezambrano.netlify.app/assets/img/goodideaimg.png',
      title: 'Videojuego GoodIdeas',
      description: 'Realizado con Unity, C#, Inkscape y Cakewalk. Está publicado en la plataforma itch.io.',
      title_en: 'GoodIdeas Video Game',
      description_en: 'Made with Unity, C#, Inkscape and Cakewalk. It is published on the itch.io platform.',

    },
    {
      link: 'https://mentoringtransformacional.netlify.app/',
      image: 'assets/img/transformacional-2.png',
      title: 'Landing page de Curso de transformacion',
      description: 'Web. Diseñada con HTML,Css y vanilla Javascript',
      title_en: 'Transformation course landing page',
      description_en: 'Web. Designed with HTML, CSS and vanilla Javascript',
    }
  ];

  getPdfUrl(): string {
    let urlSegments = document.location.href.split("/")
    let language = urlSegments[3];
    return language;
  }

  getTranslatedTitle(slide: any): string {
    return this.getPdfUrl() === 'en' ? slide.title_en : slide.title;
  }

  getTranslatedDescription(slide: any): string {
    return this.getPdfUrl() === 'en' ? slide.description_en : slide.description;
  }
}

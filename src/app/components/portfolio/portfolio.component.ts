import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  config: SwiperOptions = {
    
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  slides = [
    {
      link: 'https://joseyzambranov.github.io/expense-control/',
      image: 'https://josezambrano.netlify.app/assets/img/MacBook%20Pro%2014_%20-%201%20(1).png',
      title: 'Control de Gasto',
      description: 'Aplicación fullstack realizada con React, Redux, Node.js, Express y MongoDB. Controla tus gastos en tres pasos: crea un plan, regístrate e ingresa tus gastos diariamente.',
    },
    {
      link: 'https://jose-zambrano.itch.io/goodideas',
      image: 'https://josezambrano.netlify.app/assets/img/goodideaimg.png',
      title: 'Videojuego GoodIdeas',
      description: 'Realizado con Unity, C#, Inkscape y Cakewalk. Está publicado en la plataforma itch.io.',
    },
    {
      link: 'https://mentoringtransformacional.netlify.app/',
      image: 'assets/img/transformacional-2.png',
      title: 'Landing page de Curso de transformacion',
      description: 'Web. Diseñada con HTML,Css y vanilla Javascript',
    },

    
    // Agrega más objetos para cada proyecto
  ];
}

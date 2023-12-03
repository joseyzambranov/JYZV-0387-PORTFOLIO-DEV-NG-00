import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    document.body.classList.add('home'); // Asegúrate de agregar la clase 'home' al cuerpo al inicializar el componente
  }
}

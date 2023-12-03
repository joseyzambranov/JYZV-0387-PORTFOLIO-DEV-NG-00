import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('themeButton') themeButton!: ElementRef;

  toggleMenu() {
    this.navMenu.nativeElement.classList.toggle('show-menu');
    
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
    this.themeButton.nativeElement.classList.toggle('ri-moon-line');
    this.themeButton.nativeElement.classList.toggle('ri-sun-line');

    localStorage.setItem('selected-theme', this.getCurrentTheme());
    localStorage.setItem('selected-icon', this.getCurrentIcon());
  }

  getCurrentTheme() {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }

  getCurrentIcon() {
    return this.themeButton.nativeElement.classList.contains('ri-moon-line') ? 'ri-moon-line' : 'ri-sun-line';
  }
}

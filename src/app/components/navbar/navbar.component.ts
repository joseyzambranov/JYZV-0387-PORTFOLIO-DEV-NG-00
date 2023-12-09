import { Component, ElementRef, ViewChild ,Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('themeButton') themeButton!: ElementRef;
  @ViewChild('navMenuLenguage') navMenuLenguage!: ElementRef;

  constructor(@Inject(DOCUMENT) document: any , private router: Router) { }

  lenguage = [
    {
      id:"en",
      lenguage:"English"
    },{
      id:"es",
      lenguage:"Español"
    },
  ]

  changeLanguage(language:string) {
    let urlSegments = document.location.href.split("/")
    urlSegments[3] = language;
    let newUrl = urlSegments.join("/");
    //let urlWithPath = `${newUrl}${this.router.url}`
    return newUrl
  }

  toggleMenu() {
    this.navMenu.nativeElement.classList.toggle('show-menu');
    
  }

  toggleLanguage() {
    this.navMenuLenguage.nativeElement.classList.toggle('show-menu');
    
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

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  // فتح وقفل قائمة الموبايل
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // قفل القائمة عند الضغط على أي لينك
  closeMenu() {
    this.isMenuOpen = false;
  }

  // تغيير شكل الناف بار عند السكرول
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
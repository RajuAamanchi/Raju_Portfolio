import { Component, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { HOME } from 'src/app/data/portfolio.data';
import { ThemeService } from '../../services/theme.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Expose specific social links to the template
  socialLinks = HOME.links.filter( link => link.label === 'LinkedIn' ||  link.label === 'GitHub');
  currentTheme$: Observable<'light' | 'dark'>;

// Get a reference to the <nav> element in the template
  @ViewChild('navbar') navbarEl!: ElementRef;
  @ViewChild('navToggler') navToggler!: ElementRef;
  @ViewChild('navbarNav') navbarNav!: ElementRef;

  // Inject the ThemeService
  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2 // Inject Renderer2 for safe DOM manipulation
  ) {
    this.currentTheme$ = this.themeService.theme$;
  }

  // Listen for the window's scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // If user has scrolled more than 10px, add the 'navbar-scrolled' class
    if (scrollOffset > 10) {
      this.renderer.addClass(this.navbarEl.nativeElement, 'navbar-scrolled');
    } else {
      // Otherwise, remove it
      this.renderer.removeClass(this.navbarEl.nativeElement, 'navbar-scrolled');
    }
  }

  /**
   * Collapses the navbar if it's currently open in mobile view.
   */
  collapseNavbar(): void {
    // Check if the navbar is expanded (Bootstrap adds the 'show' class)
    if (this.navbarNav.nativeElement.classList.contains('show')) {
      // Trigger a click on the toggler button to collapse the menu
      this.navToggler.nativeElement.click();
    }
  }

  // Method to call the service
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
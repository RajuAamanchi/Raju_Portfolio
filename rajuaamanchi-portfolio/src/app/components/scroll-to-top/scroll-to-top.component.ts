import { Component, HostListener, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements AfterViewInit {
  showButton = false;
  
  // FIX: Changed the type from SVGPathElement to the correct SVGCircleElement
  @ViewChild('progressCircle') progressCircle!: ElementRef<SVGCircleElement>;
  private circumference: number = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // This logic now works correctly with the proper type
    if (this.progressCircle) {
      const radius = this.progressCircle.nativeElement.r.baseVal.value;
      this.circumference = 2 * Math.PI * radius;
      this.renderer.setStyle(this.progressCircle.nativeElement, 'stroke-dasharray', `${this.circumference} ${this.circumference}`);
      this.renderer.setStyle(this.progressCircle.nativeElement, 'stroke-dashoffset', this.circumference);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    this.showButton = scrollOffset > 200;

    const scrollProgress = scrollHeight > 0 ? scrollOffset / scrollHeight : 0;
    const dashoffset = this.circumference - (scrollProgress * this.circumference);
    
    if (this.progressCircle) {
      this.renderer.setStyle(this.progressCircle.nativeElement, 'stroke-dashoffset', dashoffset);
    }
  }

  scrollToTop() {
    // FIX: This now checks for smooth scroll support to ensure compatibility with all browsers, including older iOS
    if ('scrollBehavior' in document.documentElement.style) {
      // The browser supports smooth scrolling
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback for browsers that do not support it
      window.scrollTo(0, 0);
    }
  }
}
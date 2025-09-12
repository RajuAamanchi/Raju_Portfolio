import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HOME } from '../../data/portfolio.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  homeData = HOME;
  
  // Properties for the typing animation
  displayedRole = '';
  private fullRole = HOME.role;
  private typingInterval: any;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(`${this.homeData.name} | ${this.homeData.role}`);
    this.metaService.addTag({
      name: 'description',
      content: this.homeData.tagline
    });
    
    // Start the typing animation when the component loads
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed
    clearInterval(this.typingInterval);
  }

  startTypingAnimation(): void {
    let charIndex = 0;
    this.typingInterval = setInterval(() => {
      if (charIndex < this.fullRole.length) {
        this.displayedRole += this.fullRole.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 100); // Adjust typing speed here (in milliseconds)
  }
}
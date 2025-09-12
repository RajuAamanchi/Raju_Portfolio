import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  // Expose the current theme as an observable
  private currentTheme = new BehaviorSubject<'light' | 'dark'>('dark');
  public theme$ = this.currentTheme.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  private initializeTheme() {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = storedTheme || preferredTheme;
    this.setTheme(initialTheme);
  }

  public setTheme(theme: 'light' | 'dark') {
    const host = this.document.body;
    
    localStorage.setItem('theme', theme);
    this.currentTheme.next(theme);

    if (theme === 'light') {
      this.renderer.addClass(host, 'light-theme');
    } else {
      this.renderer.removeClass(host, 'light-theme');
    }
  }

  public toggleTheme() {
    const newTheme = this.currentTheme.value === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}
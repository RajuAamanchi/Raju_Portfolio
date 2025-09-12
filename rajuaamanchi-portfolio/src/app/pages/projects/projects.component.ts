import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PROJECT_DATA } from 'src/app/data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Projects | Raju Aamanchi');
    this.metaService.addTag({
      name: 'description',
      content: 'A showcase of Raju Aamanchi\'s projects, including React dashboards, e-commerce sites, and more.'
    });

    this.projects = PROJECT_DATA.map(project => ({
      ...project,
      isPlaying: false // We assume autoplay is working
    }));
  }

  /**
   * This function now receives the actual HTMLVideoElement and the project data.
   * It uses the native play() and pause() methods to control the video.
   */
  togglePlay(video: HTMLVideoElement, project: any): void {
    if (video.paused) {
      video.play();
      project.isPlaying = true;
    } else {
      video.pause();
      project.isPlaying = false;
    }
  }
}
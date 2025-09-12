import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { EXPERIENCE_DATA } from 'src/app/data/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceData = EXPERIENCE_DATA;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Experience | Raju Aamanchi');
    this.metaService.addTag({
      name: 'description',
      content: 'A summary of Raju Aamanchi\'s professional work experience as a Software Engineer.'
    });
  }
}
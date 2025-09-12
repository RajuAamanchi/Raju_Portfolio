import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ABOUT_DATA } from 'src/app/data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutData = ABOUT_DATA;
  skills = this.aboutData.skills;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('About | Raju Aamanchi');
    this.metaService.addTag({
      name: 'description',
      content: 'Learn more about Raju Aamanchi\'s skills, experience, and background as a Software Engineer.'
    });
  }

  // Add this function to preserve the original order of the keys.
  keepOriginalOrder = () => 0;

  /**
   * ADD THIS NEW FUNCTION
   * This function intelligently splits the skills string. It splits by commas
   * but ignores commas that are inside parentheses, then trims whitespace.
   */
  parseSkills(skillsString: string): string[] {
    if (!skillsString) {
      return [];
    }
    // Regex to split by a comma that is not followed by a closing parenthesis
    const regex = /,\s*(?![^\(]*\))/g;
    return skillsString.split(regex);
  }
}
import { Component } from '@angular/core';
import { HOME } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 homeData = HOME;
 currentYear = new Date().getFullYear()
 contact_details = {
    "Phone": "+1 (901) 319-9865",
    "Email": "rajuamanchi124@gmail.com",
    "LinkedIn": "https://linkedin.com/in/raju-aamanchi-25a54abb",
    "GitHub": "https://github.com/RajuAamanchi"
}
}

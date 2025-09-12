import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CONTACT } from 'src/app/data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactInfo = CONTACT;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Contact | Raju Aamanchi');
    this.metaService.addTag({
      name: 'description',
      content: 'Contact Raju Aamanchi for job opportunities, collaborations, or other inquiries.'
    });
  }
}
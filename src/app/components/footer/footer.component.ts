import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contacts: {
    name: string,
    icon: string,
    iconType: string,
    text: string,
    link: string
  }[];

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}

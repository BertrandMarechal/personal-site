import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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

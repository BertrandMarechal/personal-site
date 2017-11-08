import { Component, OnInit } from '@angular/core';
import { LocaleTextService } from '../../services/locale-text.service';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data:{
    title: string,
    pitch: string
  };
  contacts: {
    name: string,
    icon: string,
    iconType: string,
    text: string,
    link: string
  }[];
  
  constructor(
    private localeTextService: LocaleTextService,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.localeTextService.getValue('contact')
    .then((result) => {
      this.data = result;
    })
    .catch((error) => {
      console.log(error)
    });
  }

}

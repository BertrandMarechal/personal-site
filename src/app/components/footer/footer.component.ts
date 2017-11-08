import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { LocaleTextService } from '../../services/locale-text.service';

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
    menus: {
      name: string,
      link: string
    }[];

  constructor(
    private contactsService: ContactsService,
    private localeTextService: LocaleTextService
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.localeTextService.getValue('menu')
    .then((result) => {
      this.menus = result.menus;
    })
    .catch((error) => {
      console.log(error)
    });
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor() { }
  getContacts() {
    return [{
      name: 'Phone',
      icon: 'phone',
      iconType: 'material',
      text: '+44 (0) 7760 919313',
      link: 'tel:+447760919313'
    },
    {
      name: 'Email',
      icon: 'email',
      iconType: 'material',
      text: 'bertrand.marechal@gadz.org',
      link: 'mailto:bertrand.marechal@gadz.org'
    },
    {
      name: 'LinkedIn',
      icon: 'in',
      iconType: 'text',
      text: 'linkedin.com/in/bertrand-marechal',
      link: 'https://www.linkedin.com/in/bertrand-marechal'
    },
    {
      name: 'GitHub',
      icon: 'git',
      iconType: 'text',
      text: 'github.com/BertrandMarechal',
      link: 'https://github.com/BertrandMarechal'
    }];
  }
}

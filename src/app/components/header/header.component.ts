import { Component, OnInit } from '@angular/core';
import { LocaleTextService } from '../../services/locale-text.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus: {
    name: string,
    link: string
  }[];
  constructor(
    private localeTextService: LocaleTextService
  ) { }

  ngOnInit() {
    this.localeTextService.getValue('menu')
    .then((result) => {
      this.menus = result.menus;
    })
    .catch((error) => {
      console.log(error)
    });
  }

}

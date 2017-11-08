import { Component, OnInit } from '@angular/core';
import { LocaleTextService } from '../../../services/locale-text.service';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {
  values: {
    title: string,
    list: {
      title: string,
      description: string
    }[]
  };

  constructor(
    private localeTextService: LocaleTextService
  ) { }

  ngOnInit() {
    this.localeTextService.getValue('me')
    .then((result) => {
      this.values = result.values;
    })
    .catch((error) => {
      console.log(error)
    });
  }

}

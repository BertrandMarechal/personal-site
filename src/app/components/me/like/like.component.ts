import { Component, OnInit } from '@angular/core';
import { LocaleTextService } from '../../../services/locale-text.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  interests: {
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
      this.interests = result.interests;
    })
    .catch((error) => {
      console.log(error)
    });
  }
}

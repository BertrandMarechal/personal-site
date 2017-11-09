import { Component, OnInit } from '@angular/core';
import { LocaleTextService } from '../../../../services/locale-text.service';

@Component({
  selector: 'app-headtracker-presentation',
  templateUrl: './headtracker-presentation.component.html',
  styleUrls: ['./headtracker-presentation.component.css']
})
export class HeadtrackerPresentationComponent implements OnInit {
  data: {
    name: string,
    link: string,
    linkTest: string,
    pitch: string,
    explaination: string,
    beforeTesting: string,
    links: {
      name: string,
      link: string
    }[]
  };
  constructor(
    private localeTextService: LocaleTextService
  ) { }

  ngOnInit() {
    this.localeTextService.getValue('projects')
    .then((result) => {
      this.data = result.list.find(x => x.link === 'headtracker');
    })
    .catch((error) => {
      console.log(error)
    });
  }

}

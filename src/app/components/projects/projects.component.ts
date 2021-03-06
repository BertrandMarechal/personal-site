import { Component, OnInit } from '@angular/core';
import { LocaleTextService } from '../../services/locale-text.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data:{
    title: string,
    pitch: string,
    list: {
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
    }[]
  };

  constructor(
    private localeTextService: LocaleTextService
  ) { }

  ngOnInit() {
    this.localeTextService.getValue('projects')
    .then((result) => {
      this.data = result;
    })
    .catch((error) => {
      console.log(error)
    });
  }

}

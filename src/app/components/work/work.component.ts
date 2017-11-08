import { Component, OnInit } from '@angular/core';
import { LocaleTextService } from '../../services/locale-text.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  data:{
    title: string,
    pitch: string,
    experiences: {
      name: string,
      fromTo: string,
      description: string,
      projects: {
        name: string,
        fromTo: string,
        quickDescription: string,
        longDescriptions: string[],
      }[],
      technologies: {
        imageLink: string,
        link: string,
        tooltip: string
      }[]
    }[]
  };
  constructor(
    private localeTextService: LocaleTextService
  ) { }

  ngOnInit() {
    this.localeTextService.getValue('work')
    .then((result) => {
      this.data = result;
    })
    .catch((error) => {
      console.log(error)
    });
  }

}

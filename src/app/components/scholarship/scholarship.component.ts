import { Component, OnInit } from '@angular/core';
import { LocaleTextService } from '../../services/locale-text.service';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.css']
})
export class ScholarshipComponent implements OnInit {
  data:{
    title: string,
    pitch: string,
    experiences: {
      name: string,
      fromTo: string,
      descriptions: string[],
      link: string
    }[]
  };

  constructor(
    private localeTextService: LocaleTextService
  ) { }

  ngOnInit() {
    this.localeTextService.getValue('school')
    .then((result) => {
      this.data = result;
    })
    .catch((error) => {
      console.log(error)
    });
  }

}

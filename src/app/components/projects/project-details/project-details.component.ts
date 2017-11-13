import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocaleTextService } from '../../../services/locale-text.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
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
    private localeTextService: LocaleTextService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(params => {
      let project = params[0].path;
      this.localeTextService.getValue('projects')
      .then((result) => {
        this.data = result.list.find(x => x.link === project);
      })
      .catch((error) => {
        console.log(error)
      });
    })
  }
  onBack() {
    this.router.navigate(['../'],{relativeTo: this.route});
  }
}

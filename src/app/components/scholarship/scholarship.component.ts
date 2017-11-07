import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.css']
})
export class ScholarshipComponent implements OnInit {
  experiences: {
    name: string,
    fromTo: string,
    descriptions: string[],
    link: string
  }[];

  constructor() { }

  ngOnInit() {
    this.experiences = [{
      name: 'Master EVA - Chalon-sur-Saône',
      fromTo: 'Sep. 2010 - Apr. 2011',
      descriptions: ['EVA stands for Espaces Virtuels Avancés, which means Advanced Virtual Spaces. I learned there about AR and VR technologies, the CGI pipeline and theory concerning virtual worlds.'],
      link: 'http://mti3d.artsetmetiers.fr/'
    },
    {
      name: 'Arts & Métiers ParisTech - Cluny and Paris',
      fromTo: 'Sep. 2007 - Jun. 2010',
      descriptions: [
        'Arts & Métiers ParisTech School is one of the schools from the ParisTech network, grouping some of the best schools in France. This school provides lessons from mechanical engineering to project management, and has a huge alumni society.',
        'This is where I discovered computer science and my abilities to understand and adapt complicated contexts.'
      ],
      link: 'https://artsetmetiers.fr/'
    }]
  }

}

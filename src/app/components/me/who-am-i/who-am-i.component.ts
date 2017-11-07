import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {
  whoAmIs: {title: string, description: string}[];

  constructor() { }

  ngOnInit() {
    this.whoAmIs  = [
      {
        title: 'Passionate',
        description: 'I do what I love and love what I do, so I usually do it with completely.',
      },
      {
        title: 'Logical',
        description: 'Logic is what I like, I love problems, challenges, That\'s my cuppa!',
      },
      {
        title: 'Honest',
        description: 'I consider myself as a true person, and like to tell the truth.',
      },
      {
        title: 'Creative',
        description: 'Always after the latest ideas, and trying to find new ones.',
      },
      {
        title: 'Fun',
        description: 'Life would be sad with no jokes and no good stories.',
      },
      {
        title: 'Loyal',
        description: 'I like a project that brings something, a person worth working.',
      },
    ];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  centersOfInterest: {title: string, description: string}[];

  constructor() { }

  ngOnInit() {
    this.centersOfInterest  = [
      {
        title: 'Friends',
        description: 'The ones that are always ready for some great time together, those are the best ones!',
      },
      {
        title: 'Travel',
        description: 'I stopped counting the journeys a while ago, and usually travel to Europe or Brazil.',
      },
      {
        title: 'Games',
        description: 'More of a puzzle / brain game tough, even if I won\'t refuse something that empties my mind.',
      },
    ];
  }
}

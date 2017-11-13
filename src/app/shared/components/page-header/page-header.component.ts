import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() pitch: string;
  @Input() needsBack: boolean;
  @Output() back: EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      this.title = changes.title.currentValue;
    }
    if (changes['pitch']) {
      this.pitch = changes.pitch.currentValue;
    }
    if (changes['needsBack']) {
      this.needsBack = changes.needsBack.currentValue;
    }
  }
  onClick() {
    this.back.emit();
  }
}

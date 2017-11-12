import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadtrackerComponent } from './headtracker.component';

describe('HeadtrackerComponent', () => {
  let component: HeadtrackerComponent;
  let fixture: ComponentFixture<HeadtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

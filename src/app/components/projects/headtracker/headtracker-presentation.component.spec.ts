import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadtrackerPresentationComponent } from './headtracker-presentation.component';

describe('HeadtrackerPresentationComponent', () => {
  let component: HeadtrackerPresentationComponent;
  let fixture: ComponentFixture<HeadtrackerPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadtrackerPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadtrackerPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

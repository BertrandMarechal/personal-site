import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereAmIComponent } from './where-am-i.component';

describe('WhereAmIComponent', () => {
  let component: WhereAmIComponent;
  let fixture: ComponentFixture<WhereAmIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereAmIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereAmIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

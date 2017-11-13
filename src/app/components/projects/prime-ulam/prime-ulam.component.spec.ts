import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeUlamComponent } from './prime-ulam.component';

describe('PrimeUlamComponent', () => {
  let component: PrimeUlamComponent;
  let fixture: ComponentFixture<PrimeUlamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeUlamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeUlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

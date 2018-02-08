import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersummaryComponent } from './partnersummary.component';

describe('PartnersummaryComponent', () => {
  let component: PartnersummaryComponent;
  let fixture: ComponentFixture<PartnersummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

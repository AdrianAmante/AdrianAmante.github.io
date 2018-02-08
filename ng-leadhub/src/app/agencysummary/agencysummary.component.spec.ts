import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencysummaryComponent } from './agencysummary.component';

describe('AgencysummaryComponent', () => {
  let component: AgencysummaryComponent;
  let fixture: ComponentFixture<AgencysummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencysummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

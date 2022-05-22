import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaearchDetailsFormComponent } from './reaearch-details-form.component';

describe('ReaearchDetailsFormComponent', () => {
  let component: ReaearchDetailsFormComponent;
  let fixture: ComponentFixture<ReaearchDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaearchDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaearchDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

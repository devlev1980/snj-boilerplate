import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionResearchComponent } from './institution-research.component';

describe('InstitutionResearchComponent', () => {
  let component: InstitutionResearchComponent;
  let fixture: ComponentFixture<InstitutionResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

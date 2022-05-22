import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchNameFormComponent } from './research-name-form.component';

describe('ResearchNameFormComponent', () => {
  let component: ResearchNameFormComponent;
  let fixture: ComponentFixture<ResearchNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchNameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

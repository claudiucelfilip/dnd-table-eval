import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePitchesComponent } from './manage-pitches.component';

describe('ManagePitchesComponent', () => {
  let component: ManagePitchesComponent;
  let fixture: ComponentFixture<ManagePitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

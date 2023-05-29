import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximamenteComponent } from './proximamente.component';

describe('ProximamenteComponent', () => {
  let component: ProximamenteComponent;
  let fixture: ComponentFixture<ProximamenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProximamenteComponent]
    });
    fixture = TestBed.createComponent(ProximamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

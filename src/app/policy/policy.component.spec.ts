import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyComponent } from './policy.component';

describe('ImpressumComponent', () => {
  let component: PolicyComponent;
  let fixture: ComponentFixture<PolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

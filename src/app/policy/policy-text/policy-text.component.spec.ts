import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyTextComponent } from './policy-text.component';

describe('PolicyTextComponent', () => {
  let component: PolicyTextComponent;
  let fixture: ComponentFixture<PolicyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

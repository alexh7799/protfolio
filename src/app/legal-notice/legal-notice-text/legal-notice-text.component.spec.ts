import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeTextComponent } from './legal-notice-text.component';

describe('LegalNoticeTextComponent', () => {
  let component: LegalNoticeTextComponent;
  let fixture: ComponentFixture<LegalNoticeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticeTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalNoticeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

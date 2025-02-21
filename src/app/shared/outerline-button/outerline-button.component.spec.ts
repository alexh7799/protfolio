import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterlineButtonComponent } from './outerline-button.component';

describe('OuterlineButtonComponent', () => {
  let component: OuterlineButtonComponent;
  let fixture: ComponentFixture<OuterlineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuterlineButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterlineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

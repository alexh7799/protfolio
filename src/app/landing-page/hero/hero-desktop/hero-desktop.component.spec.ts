import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDesktopComponent } from './hero-desktop.component';

describe('HeroDesktopComponent', () => {
  let component: HeroDesktopComponent;
  let fixture: ComponentFixture<HeroDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

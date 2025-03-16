import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsNameComponent } from './icons-name.component';

describe('IconsNameComponent', () => {
  let component: IconsNameComponent;
  let fixture: ComponentFixture<IconsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

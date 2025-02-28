import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSkillComponent } from './icons-skill.component';

describe('IconsSkillComponent', () => {
  let component: IconsSkillComponent;
  let fixture: ComponentFixture<IconsSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

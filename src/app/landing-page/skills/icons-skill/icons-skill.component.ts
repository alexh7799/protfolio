import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons-skill',
  standalone: true,
  imports: [],
  templateUrl: './icons-skill.component.html',
  styleUrl: './icons-skill.component.scss'
})
export class IconsSkillComponent {
    @Input() icon!: { image: string, name: string };
    @Input() isLast: boolean = false;
}

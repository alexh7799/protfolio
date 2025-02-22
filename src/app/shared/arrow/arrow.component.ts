import { Component, Input } from '@angular/core';
import { ScrollbarToSectionService } from '../services/scrollbar-to-section.service';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss'
})
export class ArrowComponent {
  @Input() href:string = '';

  constructor(private scrollbarToSectionService:ScrollbarToSectionService) {}

  onNavigate() {
    this.scrollbarToSectionService.scrollToSection(this.href);
  }
}

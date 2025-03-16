import { Component, Input, input } from '@angular/core';
import { ScrollbarToSectionService } from '../services/scrollbar-to-section.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() name = '';
  @Input() href = '';

  constructor(private scrollbarToSectionService: ScrollbarToSectionService) { }
    

  onNavigate() {
    this.scrollbarToSectionService.scrollToSection(this.href);
  }
}

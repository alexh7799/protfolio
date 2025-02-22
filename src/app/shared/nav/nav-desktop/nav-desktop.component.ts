import { Component } from '@angular/core';
import { ScrollbarToSectionService } from '../../services/scrollbar-to-section.service';

@Component({
  selector: 'app-nav-desktop',
  standalone: true,
  imports: [],
  templateUrl: './nav-desktop.component.html',
  styleUrl: './nav-desktop.component.scss',
})
export class NavDesktopComponent {
  
  constructor(private scrollbarToSectionService: ScrollbarToSectionService) { }

  onNavigate(sectionId: string) {
    this.scrollbarToSectionService.scrollToSection(sectionId);
  }
}

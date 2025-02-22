import { Component } from '@angular/core';
import { ScrollbarToSectionService } from '../../services/scrollbar-to-section.service';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss'
})
export class NavMobileComponent {
  constructor(private scrollbarToSectionService: ScrollbarToSectionService) { }
  
    onNavigate(sectionId: string) {
      this.scrollbarToSectionService.scrollToSection(sectionId);
    }
}

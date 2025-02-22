import { Component } from '@angular/core';
import { ScrollbarToSectionService } from '../../services/scrollbar-to-section.service';

@Component({
  selector: 'app-footer-mobile',
  standalone: true,
  imports: [],
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss'
})
export class FooterMobileComponent {
  
  constructor(private scrollbarToSectionService: ScrollbarToSectionService) { }

  onNavigate(sectionId: string) {
    this.scrollbarToSectionService.scrollToSection(sectionId);
  }
}

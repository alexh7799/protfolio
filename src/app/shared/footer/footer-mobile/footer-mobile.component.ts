import { Component } from '@angular/core';
import { ScrollbarToSectionService } from '../../services/scrollbar-to-section.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-footer-mobile',
  standalone: true,
  imports: [],
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss'
})
export class FooterMobileComponent {
  activeSection: string = 'hero';
  private subscription: Subscription;
  
  constructor(private scrollbarToSectionService: ScrollbarToSectionService, private translate: TranslateService, private router: Router) {
    this.subscription = this.scrollbarToSectionService.activeSection$.subscribe(
      section => this.activeSection = section
    );
  }

  onNavigate(sectionId: string) {
    this.activeSection = sectionId;
    if (this.activeSection === 'hero-mobile') {
      this.router.navigate(['/']); // Navigation zur Startseite
    }
    this.scrollbarToSectionService.scrollToSection(sectionId);
  }
}

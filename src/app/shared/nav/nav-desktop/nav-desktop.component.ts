import { Component } from '@angular/core';
import { ScrollbarToSectionService } from '../../services/scrollbar-to-section.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-desktop',
  standalone: true,
  imports: [],
  templateUrl: './nav-desktop.component.html',
  styleUrl: './nav-desktop.component.scss',
})
export class NavDesktopComponent {
  activeSection: string = 'hero';
  private subscription: Subscription;
  
  constructor(private scrollbarToSectionService: ScrollbarToSectionService) {
    this.subscription = this.scrollbarToSectionService.activeSection$.subscribe(
      section => this.activeSection = section
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onNavigate(sectionId: string) {
    this.activeSection = sectionId;
    this.scrollbarToSectionService.scrollToSection(sectionId);
  }
}

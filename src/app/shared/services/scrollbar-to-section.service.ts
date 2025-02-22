import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollbarToSectionService {

  constructor() { }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  }
}

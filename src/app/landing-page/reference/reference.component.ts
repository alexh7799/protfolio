import { Component, ElementRef, ViewChild } from '@angular/core';
import { ArrowComponent } from '../../shared/arrow/arrow.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [ArrowComponent, CommonModule, TranslateModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})

export class ReferenceComponent {
  activeSection: number = 0;
  @ViewChild('referenceContainer') referenceContainer!: ElementRef;
  
  references = [
    {project: 'angular', name: 'Angular', description: '"Angular is a platform and framework for building single-page client applications using HTML and TypeScript."'},
    {project: 'angular', name: 'Angular', description: '"Angular is a platform and framework for building single-page client applications using HTML and TypeScript."'},
    {project: 'angular', name: 'Angular', description: '"Angular is a platform and framework for building single-page client applications using HTML and TypeScript."'}
  ]

  ngAfterViewInit() {
    if (!this.referenceContainer) return;
    const container = this.referenceContainer.nativeElement;
    container.addEventListener('scroll', () => {
      this.updateActiveButton();
    });
  }

  private updateActiveButton() {
    if (!this.referenceContainer) return;
    const container = this.referenceContainer.nativeElement;
    const scrollPosition = container.scrollLeft;
    const itemWidth = 280;
    this.activeSection = Math.round(scrollPosition / itemWidth);
  }

  slideToNextCarousel(index: number) {
    if (!this.referenceContainer) return;
    this.activeSection = index;
    const container = this.referenceContainer.nativeElement;
    const items = container.getElementsByClassName('references-item');
    if (items[index]) {
      const scrollPosition = items[index].offsetLeft - container.offsetLeft;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth'});
    }
  }
}


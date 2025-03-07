import { Component } from '@angular/core';
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

  references = [
    {project: 'angular', name: 'Angular', description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.'},
    {project: 'angular', name: 'Angular', description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.'},
    {project: 'angular', name: 'Angular', description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.'}
  ]
}

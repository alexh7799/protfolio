import { Component } from '@angular/core';
import { ArrowComponent } from '../../shared/arrow/arrow.component';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {

}

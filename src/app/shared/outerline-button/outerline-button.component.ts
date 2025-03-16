import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outerline-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outerline-button.component.html',
  styleUrl: './outerline-button.component.scss'
})
export class OuterlineButtonComponent {
  @Input() name = '';
  @Input() href = '';
}

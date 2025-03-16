import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-text',
  standalone: true,
  imports: [],
  templateUrl: './policy-text.component.html',
  styleUrl: './policy-text.component.scss'
})
export class PolicyTextComponent {

  policy = {
    isActive: false
  }

  provider = {
    isActive: false
  }
}

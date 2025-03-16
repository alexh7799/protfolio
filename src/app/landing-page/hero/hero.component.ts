import { Component } from '@angular/core';
import { ArrowComponent } from "../../shared/arrow/arrow.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})

export class HeroComponent {

}

import { Component } from '@angular/core';
import { ArrowComponent } from "../../../shared/arrow/arrow.component";

@Component({
  selector: 'app-hero-desktop',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './hero-desktop.component.html',
  styleUrl: './hero-desktop.component.scss'
})
export class HeroDesktopComponent {

}

import { Component } from '@angular/core';
import { ButtonsComponent } from "../../shared/buttons/buttons.component";
import { IconsNameComponent } from "../../shared/icons-name/icons-name.component";
import { ArrowComponent } from "../../shared/arrow/arrow.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [ButtonsComponent, IconsNameComponent, ArrowComponent, CommonModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  icon = [
    { name: 'located in Hörstel', image: 'located-default.svg' },
    { name: 'open to work remote', image: 'remote-default.svg' },
    { name: 'open to relocate', image: 'relocate-default.svg' }
  ]
}

import { Component } from '@angular/core';
import { NavDesktopComponent } from '../shared/nav/nav-desktop/nav-desktop.component';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [NavDesktopComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

}

import { Component } from '@angular/core';
import { NavDesktopComponent } from '../shared/nav/nav-desktop/nav-desktop.component';
import { FooterDesktopComponent } from '../shared/footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../shared/footer/footer-mobile/footer-mobile.component';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [FooterDesktopComponent, FooterMobileComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

}

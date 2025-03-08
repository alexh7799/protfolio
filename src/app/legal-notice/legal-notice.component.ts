import { Component } from '@angular/core';
import { FooterDesktopComponent } from '../shared/footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../shared/footer/footer-mobile/footer-mobile.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterDesktopComponent, FooterMobileComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}

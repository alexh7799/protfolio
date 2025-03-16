import { Component } from '@angular/core';
import { FooterDesktopComponent } from '../shared/footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../shared/footer/footer-mobile/footer-mobile.component';
import { LegalNoticeTextComponent } from "./legal-notice-text/legal-notice-text.component";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterDesktopComponent, FooterMobileComponent, LegalNoticeTextComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}

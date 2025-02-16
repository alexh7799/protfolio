import { Component } from '@angular/core';
import { NavDesktopComponent } from '../shared/nav/nav-desktop/nav-desktop.component';
import { HeroDesktopComponent } from './hero/hero-desktop/hero-desktop.component';
import { SocialMediaComponent } from "./social-media/social-media.component";


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavDesktopComponent, HeroDesktopComponent, SocialMediaComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}

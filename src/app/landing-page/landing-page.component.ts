import { Component } from '@angular/core';
import { NavDesktopComponent } from '../shared/nav/nav-desktop/nav-desktop.component';
import { HeroDesktopComponent } from './hero/hero-desktop/hero-desktop.component';
import { SocialMediaComponent } from "./social-media/social-media.component";
import { MyWorkComponent } from './my-work/my-work.component';
import { WhyMeComponent } from "./why-me/why-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavDesktopComponent, HeroDesktopComponent, SocialMediaComponent, MyWorkComponent, WhyMeComponent, SkillsComponent, ContactComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}

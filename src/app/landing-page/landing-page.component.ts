import { Component } from '@angular/core';
import { HeroDesktopComponent } from './hero/hero-desktop/hero-desktop.component';
import { SocialMediaComponent } from "./social-media/social-media.component";
import { MyWorkComponent } from './my-work/my-work.component';
import { WhyMeComponent } from "./why-me/why-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterDesktopComponent } from "../shared/footer/footer-desktop/footer-desktop.component";
import { ReferenceComponent } from "./reference/reference.component";


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroDesktopComponent, SocialMediaComponent, MyWorkComponent, WhyMeComponent, SkillsComponent, ContactComponent, FooterDesktopComponent, ReferenceComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {

}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  currentLang: string = 'de';
  icon = [
    {
      image: 'email-default.svg',
      hoverImage: 'email-hover.svg'
    },
    {
      image: 'linkedin-default.svg',
      hoverImage: 'linkedin-hover.svg'
    },
    {
      image: 'github-default.svg',
      hoverImage: 'github-hover.svg'
    },
  ];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
    this.currentLang = translate.currentLang || 'de';
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  changeImage(index: number, isHovered: boolean) {
    this.icon[index].image = isHovered ? 
      this.icon[index].hoverImage : 
      this.icon[index].image.replace('-hover', '-default');
  }

  openExternalLink(url: string) {
    window.open(url, '_blank');
  }
}

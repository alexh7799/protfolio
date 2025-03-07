import { Component } from '@angular/core';
import { ButtonsComponent } from "../../shared/buttons/buttons.component";
import { IconsNameComponent } from "./icons-name/icons-name.component";
import { ArrowComponent } from "../../shared/arrow/arrow.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [ButtonsComponent, IconsNameComponent, ArrowComponent, CommonModule, TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  icon = [
    { 
      name: 'located in Hörstel', 
      image: 'located-default.svg',
      hoverImage: 'located-hover.svg'
    },
    { 
      name: 'open to work remote', 
      image: 'remote-default.svg',
      hoverImage: 'remote-hover.svg'
    },
    { 
      name: 'open to relocate', 
      image: 'relocate-default.svg',
      hoverImage: 'relocate-hover.svg'
    }
  ];

  changeImage(index: number, isHovered: boolean) {
    this.icon[index].image = isHovered ? 
      this.icon[index].hoverImage : 
      this.icon[index].image.replace('-hover', '-default');
  }
}

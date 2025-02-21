import { Component, Input } from '@angular/core';
import { ButtonsComponent } from "../../../shared/buttons/buttons.component";
import { OuterlineButtonComponent } from "../../../shared/outerline-button/outerline-button.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ButtonsComponent, OuterlineButtonComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() item!: {id: number, title: string, text:any, github:string, livelink: string};
}

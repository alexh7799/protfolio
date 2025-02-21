import { Component } from '@angular/core';
import { ArrowComponent } from '../../shared/arrow/arrow.component';
import { ProjectComponent } from "./project/project.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ArrowComponent, ProjectComponent, CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  projects = [
    {id: 1, title: 'Join'},
    {id: 2,title: 'Pokedex'},
    {id: 3, title: 'Dark Magic'}
  ]
}

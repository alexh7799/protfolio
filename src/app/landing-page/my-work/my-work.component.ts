import { Component } from '@angular/core';
import { ArrowComponent } from '../../shared/arrow/arrow.component';
import { ProjectComponent } from "./project/project.component";
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../../shared/buttons/buttons.component";

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ArrowComponent, ProjectComponent, CommonModule, ButtonsComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  btnText: string = "Let's talk";
  projects = [
    { 
      id: 1, 
      title: 'Join', 
      text: [
        { 
          headline: 'About the project', 
          text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.' 
        }, 
        { 
          headline: 'Technologies I have used', 
          text: 'Angular, TypeScript, HTML, CSS, Firebase' 
        }, 
        { 
          headline: 'What I have  learned', 
          text: 'Maybe you used a certain technology for the first time? Have you learnt more about how to keep your code clean or how to organise the components in your projects?' 
        }
      ], 
      github: '', 
      livelink: '' 
    },
    { 
      id: 2, 
      title: 'Pokedex', 
      text: [
        { 
          headline: '', 
          text: '' 
        }, 
        { 
          headline: '', 
          text: '' 
        }, 
        { 
          headline: '', 
          text: '' 
        }
      ], 
      github: '', 
      livelink: '' 
    },
    { 
      id: 3, 
      title: 'Dark Magic', 
      text: [
        { 
          headline: '', 
          text: '' 
        }, 
        { 
          headline: '', 
          text: '' 
        }, 
        { 
          headline: '', 
          text: '' 
        }
      ], 
      github: '', 
      livelink: '' 
    }
  ]
}

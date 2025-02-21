import { Component } from '@angular/core';
import { ButtonsComponent } from "../../shared/buttons/buttons.component";
import { ArrowComponent } from "../../shared/arrow/arrow.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonsComponent, ArrowComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}

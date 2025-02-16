import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavDesktopComponent } from "./shared/nav/nav-desktop/nav-desktop.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavDesktopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

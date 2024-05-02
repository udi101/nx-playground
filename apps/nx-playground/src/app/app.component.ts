import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MenuComponent } from './menu/menu.component';
import { UiComponent } from '@nx-playground/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MenuComponent, UiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-playground';
}

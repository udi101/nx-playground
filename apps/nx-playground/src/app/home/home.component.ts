import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from '@nx-playground/ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

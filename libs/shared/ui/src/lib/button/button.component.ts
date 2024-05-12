import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() click = new EventEmitter();

  onClickEmitter = (event: MouseEvent) => {
    event.stopPropagation();
    this.click.emit();
  };
}

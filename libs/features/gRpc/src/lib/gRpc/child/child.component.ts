import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {


  @Input() counter: number;

  get getCounter() {
    console.log('Get counter in ChildComponent is called');
    return this.counter;
  }

}

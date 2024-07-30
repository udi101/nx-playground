import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'lib-g-rcp',
  standalone: true,
  imports: [CommonModule, ChildComponent, Child2Component],
  templateUrl: './gRpc.component.html',
  styleUrl: './gRpc.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GRcpComponent {

  counter = 0;

  get data() {
    console.log('I am getting the data in GRcpComponent');
    return 1;
  }

  incCounter() {
    if (this.counter < 3) {
      this.counter++;
    }
  }

}

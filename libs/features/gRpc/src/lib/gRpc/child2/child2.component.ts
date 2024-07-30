import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, effect, inject,
  Input,
  OnInit, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, take } from 'rxjs';

@Component({
  selector: 'child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit {
  @Input() counter: number;
  private cdr = inject(ChangeDetectorRef);
  interval$ = interval(1000).pipe(take(3));
  clickCountSignal = signal(0);
  localInterval = 0;
  localIntervalSignal = signal<number>(0);
  data = 'Udi Mazor';

  constructor() {
    effect(() => {
      console.log(`Effect : Button was clicked ${this.clickCountSignal()} times`);
    });
    effect(() => {
      console.log(`Effect : The Interval was triggered ${this.localIntervalSignal()} times`);
    });
  }

  onClick() {
    this.clickCountSignal.update(preCount => preCount + 1);
  }

  get getCounter() {
    console.log('I am getting the counter in Child2Component');
    return this.counter;
  }

  onInput(data: any) {
    this.data = data.target.value;

  }

  ngOnInit() {
    this.interval$.subscribe((counter) => {
      this.localInterval = this.localInterval + 1;
      this.localIntervalSignal.set(this.localInterval);
    });
  }

}


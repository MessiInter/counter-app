import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  constructor(private counter: CounterService) { }

  @Input() count: number

  saveCount(_count: number): void {
    const countData: string = JSON.stringify(_count);
    localStorage.setItem('count', countData);
  }

  setSaveCount(_count: number): void {
    this.count = this.counter.setCount(_count);
    this.saveCount(this.count);
  }

  increment(_count: number): void {
    this.count = this.counter.setCount(_count + 1);
    this.saveCount(this.count);
  }

  decrement(_count: number): void {
    this.count = this.counter.setCount(_count - 1);
    this.saveCount(this.count);
  }

  resetHandle(): void {
    if (this.count !== 0 || this.count > 0) {
      const isOk: boolean = confirm('Do you want to reset the counter to 0?');
      if (isOk) {
        this.count = this.counter.setCount(0);
        this.saveCount(this.count);
      } else {
        return;
      }
    } else {
      return;
    }
  }

  ngOnInit(): void { 
    const oldCount: number | null = Number(JSON.parse(localStorage.getItem('count') ?? '0'))
    this.count = oldCount <= 0 ? 0 : oldCount;
  }
}

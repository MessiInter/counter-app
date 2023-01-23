import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  setCount(_newCount: number): number {
    if (_newCount <= 0) {
      return 0;
    } else {
      return _newCount;
    }
  }
}

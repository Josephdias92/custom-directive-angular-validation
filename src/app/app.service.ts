import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppService {
  constructor() { }

  showRemaining(listOfValues, remaining) {
    const r = Object.values(listOfValues).reduce((acc, val) => {
      acc = Number(acc) - Number(val);
      return acc;
    }, remaining);
    return r;
  }
}

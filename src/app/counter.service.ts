import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  constructor() { }

  public countAction(initialStatus: string, newStatus: string): void {
    if (initialStatus === 'inactive' && newStatus === 'active') {
      this.inactiveToActiveCount++;

      console.log(
        `New action registered: %c${ initialStatus } %c\u2192 %c${ newStatus } %c(${ this.inactiveToActiveCount } action(s) of this type have been registered)`,
        `color: red; font-weight: bold`,
        'color: blue;',
        `color: green; font-weight: bold`,
        `color: black`);
    } else if (initialStatus === 'active' && newStatus === 'inactive') {
      this.activeToInactiveCount++;

      console.log(
        `New action registered: %c${ initialStatus } %c\u2192 %c${ newStatus } %c(${ this.activeToInactiveCount } action(s) of this type have been registered)`,
        `color: green; font-weight: bold`,
        'color: blue;',
        `color: red; font-weight: bold`,
        `color: black`);
    } else {
      console.log('Invalid action');
    }
  }
}

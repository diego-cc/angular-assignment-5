import { Injectable } from '@angular/core';
import {CounterService} from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  public toggleUserStatus(currentStatus: string, id: number): void {
    if (currentStatus.trim().toLowerCase() === 'inactive') {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.counterService.countAction('inactive', 'active');

    } else if (currentStatus.trim().toLowerCase() === 'active') {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.countAction('active', 'inactive');

    } else {
      console.log('Invalid toggleUserStatus action');
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicService {
  private carrentUser = {
    name: 'aaaa',
    role: 'agent',
  }

  getUser() {
    return this.carrentUser;
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { User } from './models';
import { delay, of } from 'rxjs';



let USERS_DB: User[] = [
  {
    id: 'QA17061',
    firstName: 'Heidi',
    lastName: 'Heinz',
    email: 'hh@mail.com',
    password: '123',
    role: 'Estudiante'
  },
  {
    id: 'AR00065',
    firstName: 'Pedro',
    lastName: 'Lo',
    email: 'lop@mail.com',
    password: '123',
    role: 'Estudiante'
  }
]

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getUsers() {
    return of(USERS_DB).pipe(delay(1500))
  }
  createUser (payload: User) {
    USERS_DB.push(payload);
    return this.getUsers();
  }
  deleteUser(userID: string) {
    USERS_DB = USERS_DB.filter((user)=> user.id !== userID);
    return this.getUsers();
  }
}


import { User} from './data.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      firstName: 'Andrada',
      lastName: 'Canta',  
      email: 'anda@yahoo.com',
      password:'Andrada!123'
    },
    {
      firstName: 'Otilia',
      lastName: 'Chelmus',  
      email: 'oti@yahoo.com', 
      password:'Oti!123' 

    },
  ];

  getUser(): User[] {
    return this.users;
  }

  setUser(users: User[]) {
    this.users = users;
  }

  searchUser(emailUser: string): User[]{
    return this.users.filter((item) => item.email.includes(emailUser));
  }

  getCertainUser(user: User): User | undefined {
    return this.users.find((elem) => elem == user);
  }

  addNewUser(user: User) {
    this.users.push(user);
    console.log(this.users);
  }
}

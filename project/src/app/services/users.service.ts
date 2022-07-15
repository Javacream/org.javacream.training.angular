import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers$(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number): Promise<User> {
    const promise = new Promise<User>((resolve, reject) => {
      this.getUsers$().subscribe(
        (users) => resolve(users.find((user) => user.id === id) || new User()),
        (error) => reject(error)
      );
    });

    return promise;
  }
}

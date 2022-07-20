import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserByIdFetchPromiseApi(id: number): Promise<User> {
    let response: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/users/1')
    return response.then((response) => response.json());
  }

  async getUserByIdFetchAsyncAwaitApi(id: number): Promise<User> {
    let response: Response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    let data = await response.json();
    return data;
  }

  getUserByIdHttpClient(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');
  }


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

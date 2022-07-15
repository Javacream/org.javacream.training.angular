import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  toStorage<T>(key: string, item: T): void {
    const dataObject: T[] = this.fromStorage<T>(key);

    dataObject.push(item);

    localStorage.setItem(key, JSON.stringify(dataObject));
  }

  fromStorage<T>(key: string): T[] {
    const data = localStorage.getItem(key) || '[]';
    const dataObject: T[] = JSON.parse(data);

    return dataObject;
  }

  resetStorage(key: string): void {
    localStorage.setItem(key, '[]');
  }
}

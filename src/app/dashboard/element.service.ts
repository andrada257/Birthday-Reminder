import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor() {}

  getElementList() {
    return [
      { position: 1, name: 'Canta', surname: 'Andrada', number: '0745120222', city: 'Brasov', birthday: 'January 25, 2002' },
      { position: 2, name: 'Popescu', surname: 'Ana', number: '0745120232', city: 'Brasov', birthday: 'July 07, 2003' },
      { position: 3, name: 'Ionescu', surname: 'Maria', number: '0745777938', city: 'Brasov', birthday: 'July 07, 2003' },
    ];
  }
}

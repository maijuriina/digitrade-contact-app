import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/contacts';
  }

  get(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url)
      .pipe(
        map(contacts => {
          return contacts as Contact[];
        })
      );
  }
}

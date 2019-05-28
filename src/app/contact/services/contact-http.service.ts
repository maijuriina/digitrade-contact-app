import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.endpointUrl}contacts`;
  }

  get(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url)
      .pipe(
        map(contacts => {
          return contacts as Contact[];
        })
      );
  }

  getById(id): Observable<Contact> {
    return this.http.get(this.url + '/' + id).pipe(map(response => {
      return response as Contact;
    }));
  }

  put(contact): Observable<Contact> {
    return this.http.put(this.url + '/' + contact.id, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

  post(contact): Observable<Contact> {
    return this.http.post(this.url, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

  delete(contact): Observable<any> {
    return this.http.delete(this.url + '/' + contact.id);
  }
}

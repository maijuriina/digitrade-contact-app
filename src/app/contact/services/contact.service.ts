import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /*this.contacts = [
      new Contact('Hillevi', 'Hiiri', '0501234567'),
    new Contact('Kieku', 'Kukko', '0401234567'),
    new Contact('Mauku', 'Mirri', '0451234567')];

    this.contacts.push(new Contact('Harri', 'Hirvi', '0551234567'));
     */
  }

  get(): Observable<Contact[]> {
    // return this.contacts;
    return this.contactHttpService.get();
  }

  getContactById(id): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }
}

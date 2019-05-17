import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts.push(new Contact('Hillevi', 'Hiiri', '0501234567'));
    this.contacts.push(new Contact('Kieku', 'Kukko', '0401234567'));
    this.contacts.push(new Contact('Mauku', 'Mirri', '0451234567'));
    console.log(this.contacts);
  }
}

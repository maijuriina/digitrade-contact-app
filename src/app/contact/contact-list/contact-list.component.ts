import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {formGroupNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {group} from '@angular/animations';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;

  constructor() {
    this.contacts = [];
    this.selectedContactName = '';
  }

  onContactSelected(contact: Contact): void {
    this.selectedContactName = contact.firstName + ' ' + contact.lastName;
    alert(contact.firstName);
  }

  ngOnInit() {
    this.contacts.push(new Contact('Hillevi', 'Hiiri', '0501234567'));
    this.contacts.push(new Contact('Kieku', 'Kukko', '0401234567'));
    this.contacts.push(new Contact('Mauku', 'Mirri', '0451234567'));
    console.log(this.contacts);
  }
}

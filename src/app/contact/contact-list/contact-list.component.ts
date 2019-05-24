import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {formGroupNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {group} from '@angular/animations';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarOptions} from '../../toolbar/toolbar-options';
import {ToolbarAction} from '../../toolbar/toolbar-actions';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;

  constructor(private contactService: ContactService, private router: Router) {
  this.contacts = [];
  this.selectedContactName = '';
  }

  onContactSelected(contact) {
    this.router.navigate(['/contacts/' + contact.id], {skipLocationChange: true});
  }

  ngOnInit() {
    /* this.contacts = this.contactService.get();
    console.log(this.contacts); */
    this.contactService.get().subscribe((response => {
      this.contacts = response;
    }));
  }
}

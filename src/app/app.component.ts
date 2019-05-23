import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'dtca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kontaktisovellus digitrade 2019';
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}



import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {any} from 'codelyzer/util/function';
import {ToolbarOptions} from './toolbar-options';
import {ToolbarService} from './toolbar.service';

@Component({
  selector: 'dtca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  @Output() MenuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private toolbar: ToolbarService, private router: Router) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe((options: ToolbarOptions) => {
      this.options = options;
    });
  }

  onNavigateBack() {
    this.router.navigate(['/contacts']);
  }

  onMenuClick() {
    this.MenuClick.emit();
  }
}

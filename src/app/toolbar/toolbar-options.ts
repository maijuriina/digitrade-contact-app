import {ToolbarAction} from './toolbar-actions';

export class ToolbarOptions {
    backEnabled: boolean;
    title: string;
    actions: ToolbarAction[];


  constructor(backEnabled: boolean, title: string, actions: ToolbarAction[]) {
    this.backEnabled = backEnabled;
    this.title = title;
    this.actions = actions;
  }
}

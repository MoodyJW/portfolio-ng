import { Component, Input } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  details: string;
  url: string;
  openState: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() content: Project = {
    title: '',
    description: '',
    details: '',
    url: '',
    openState: 'closed',
  };
  mainState: string = 'open';
  detailsState = 'closed';
  detailsShown = false;
  clicked = false;
}

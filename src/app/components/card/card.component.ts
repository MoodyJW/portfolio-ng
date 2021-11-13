import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../projects-page/projects-page.component';

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
    urlText: '',
    openState: 'closed',
  };
  @Output() openState = new EventEmitter();
}

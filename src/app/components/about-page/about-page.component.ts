import { Component } from '@angular/core';
import { fader, showHide, rotatedState } from '../../component-animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [fader, showHide, rotatedState],
})
export class AboutPageComponent {
  short = true;
  sectionIsOpen = [...Array(4)].map(() => 'closed');
  rotatedState = [...Array(4)].map(() => 'default');

  constructor() {}

  toggleShowHide(index: number): void {
    this.rotatedState[index] =
      this.rotatedState[index] === 'default' ? 'rotated' : 'default';
    this.sectionIsOpen[index] =
      this.sectionIsOpen[index] === 'closed' ? 'open' : 'closed';
  }
}

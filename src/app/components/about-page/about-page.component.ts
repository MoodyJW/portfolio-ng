import { Component } from '@angular/core';
import { fader, showHide, rotatedState } from '../../component-animations';
import { ABOUT_SECTIONS } from './about.constants';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [fader, showHide, rotatedState],
})
export class AboutPageComponent {
  short = true;
  sections = ABOUT_SECTIONS;
  sectionIsOpen = [...Array(this.sections.length)].map(() => 'closed');
  rotatedState = [...Array(this.sections.length)].map(() => 'default');

  toggleShowHide(index: number): void {
    this.rotatedState.forEach((rotatedState, i) => {
      if (index === i) {
        this.rotatedState[i] =
          rotatedState === 'rotated' ? 'default' : 'rotated';
      } else this.rotatedState[i] = 'default';
    });
    this.sectionIsOpen.forEach((openState, i) => {
      if (index === i) {
        this.sectionIsOpen[i] = openState === 'open' ? 'closed' : 'open';
      } else this.sectionIsOpen[i] = 'closed';
    });
  }
}

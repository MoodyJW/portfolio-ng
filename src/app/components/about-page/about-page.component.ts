import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { showHide, rotatedState } from '../../component-animations';
import { ABOUT_SECTIONS } from './about.constants';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [showHide, rotatedState],
})
export class AboutPageComponent implements OnInit {
  @ViewChild(ModalComponent)
  modal: ModalComponent = new ModalComponent();
  sections = ABOUT_SECTIONS;
  short = true;
  innerWidth: number | undefined;
  sectionIsOpen = [...Array(this.sections.length)].map(() => 'closed');
  rotatedState = [...Array(this.sections.length)].map(() => 'default');

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  toggleDetails(item: any) {
    this.modal.showModal = true;
    this.modal.toggleModal(true, item);
  }

  toggleShowHide(index: number): void {
    if (this.innerWidth && this.innerWidth >= 1440) {
      this.rotatedState[index] =
        this.rotatedState[index] === 'rotated' ? 'default' : 'rotated';
      this.sectionIsOpen[index] =
        this.sectionIsOpen[index] === 'open' ? 'closed' : 'open';
      return;
    }
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

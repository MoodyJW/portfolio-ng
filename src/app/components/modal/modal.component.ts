import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';

export interface ModalContent {
  details: string[];
  title: string;
  date: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  showModal = false;
  unsubscribe$ = new Subject();
  content: ModalContent | undefined;

  ngOnInit(): void {
    fromEvent(document, 'keyup')
      .pipe(
        filter((e: any) => e.key === 'Escape'),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => (this.showModal = false));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  public preventToggle(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }

  public toggleModal(
    openModal: boolean,
    content: ModalContent | undefined
  ): void {
    this.content = content;
    const modalContainer =
      document.getElementsByClassName('modal-container')[0];
    if (!openModal) {
      modalContainer?.classList.add('out');
    } else {
      modalContainer?.classList.remove('out');
      modalContainer?.classList.add('circle-slider');
    }
  }
}

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
  unsubscribe$ = new Subject();
  content: ModalContent | undefined;
  showModal = false;
  circleSlider: boolean = false;

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
    this.circleSlider = true;
    this.showModal = openModal;
  }
}

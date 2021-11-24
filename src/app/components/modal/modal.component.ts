import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  @Input() content: ModalContent = { details: [], title: '', date: '' };
  showModal = false;
  unsubscribe$ = new Subject();

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

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  preventToggle(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
}

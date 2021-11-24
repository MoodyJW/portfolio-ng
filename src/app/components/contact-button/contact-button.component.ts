import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss'],
})
export class ContactButtonComponent implements OnInit, OnDestroy {
  menuIsOpen = false;
  unsubscribe$ = new Subject();

  ngOnInit(): void {
    fromEvent(document, 'keyup')
      .pipe(
        filter((e: any) => e.key === 'Escape'),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => (this.menuIsOpen = false));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  stopProp(event: Event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
}

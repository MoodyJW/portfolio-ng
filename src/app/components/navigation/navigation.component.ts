import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { ROUTER_LINKS } from './navigation.constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnDestroy {
  pathName: string = '';
  unsubscribe$ = new Subject();
  routerLinks = ROUTER_LINKS;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(
        filter((data) => !!data),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((data) => (this.pathName = data.pathName));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}

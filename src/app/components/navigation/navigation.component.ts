import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

export interface NavLink {
  url: string;
  title: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnDestroy {
  pathName: string = '';
  unsubscribe$ = new Subject();
  routerLinks: NavLink[] = [
    {
      url: '/home',
      title: 'home',
    },
    {
      url: '/about',
      title: 'about',
    },
    {
      url: '/projects',
      title: 'projects',
    },
  ];
  footerLinks: NavLink[] = [
    {
      url: 'https://www.linkedin.com/in/jasonwmoody/',
      title: '',
    },
    {
      url: 'https://github.com/MoodyJW',
      title: '',
    },
    {
      url: 'https://leetcode.com/MoodyJW/',
      title: '',
    },
  ];

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

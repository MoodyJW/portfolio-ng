import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  pathName: string = '';
  unsubscribe$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data
      .pipe(
        filter((data) => !!data),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((data) => (this.pathName = data.pathName));
  }

  ngOnInit(): void {
    console.log(this.pathName);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}

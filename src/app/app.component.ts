import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { stepper } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [stepper],
})
export class AppComponent implements OnInit {
  private themeQuery: MediaQueryList;
  private getScreenWidth: any;

  public title = 'JWM';
  public isDark = true;
  public isSmallScreen: boolean;

  constructor(private media: MediaMatcher) {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth < 500) {
      this.isSmallScreen = true;
    } else this.isSmallScreen = false;
    this.themeQuery = this.media.matchMedia('(prefers-color-scheme: dark)');
  }

  ngOnInit(): void {
    if (this.themeQuery.matches) {
      this.isDark = true;
    } else this.isDark = false;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth < 500) {
      this.isSmallScreen = true;
    } else this.isSmallScreen = false;
  }

  prepareRoute(outlet: RouterOutlet): boolean {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}

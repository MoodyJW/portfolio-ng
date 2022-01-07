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
  private getScreenWidth: number;

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
    console.log(
      ` %c${String.fromCodePoint(
        0x1f603
      )} Thanks for visiting! Please let me know if you find any ${String.fromCodePoint(
        0x1fab3,
        0x1fab0,
        0x1f41c
      )} or have suggestions to improve the site. Click the contact button or just send an email to: JWMoody@protonmail.com.`,
      `font-family: Fira Mono, monospace; font-size: 16px; color: 255, 255, 255, 0.934; background-color: #333;padding: 5px`
    );
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

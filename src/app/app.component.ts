import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from './route-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [stepper],
})
export class AppComponent implements OnInit {
  title = 'JWM';
  // theme = 'theme-alternate';
  checked = false;
  isDark = true;
  themeQuery: MediaQueryList;
  public isSmallScreen: boolean;
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor(private media: MediaMatcher) {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth < 500) {
      this.isSmallScreen = true;
    } else this.isSmallScreen = false;
    this.themeQuery = this.media.matchMedia('(prefers-color-scheme: dark)');
  }
  ngOnInit() {
    console.log(this.themeQuery);
    if (this.themeQuery.matches) {
      this.isDark = true;
    } else this.isDark = false;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
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

  // changeTheme(event: any) {
  //   this.theme = event.checked ? 'theme-alternate' : '';
  // }
}

import {AfterViewInit, Component, HostBinding} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ButtonComponent} from "../button/button.component";
import {Page} from "./Page";
import {distinctUntilChanged, filter, fromEvent, map, pairwise, share, throttleTime} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
export type VisibilityState = 'visible'|'hidden';
export type Direction = 'up'|'down';
@Component({
  animations: [
    trigger('toggle', [
      state(
        'hidden',
        style({opacity: 0, transform: 'translateY(-100%)'})
      ),
      state(
        'visible',
        style({opacity: 1, transform: 'translateY(0)'})
      ),
      transition('* => *', animate('500ms ease-in'))
    ])
  ],
  imports: [CommonModule, ButtonComponent, BrowserAnimationsModule],
  selector: 'app-nav',
  standalone: true,
  styleUrls: ['./nav.component.scss'],
  templateUrl: './nav.component.html'
})
export class NavComponent implements AfterViewInit {

  private isVisible = true;
  pages: Page[] = [{title: 'Home'}, {title: 'Stats'}, {title: 'Info'}, {title: 'Faq'}, {title: 'Impress'}]

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? 'visible' : 'hidden';
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', function() {
      console.log(window.scrollY);
    });
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? 'up' : 'down')),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === 'up')
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === 'down')
    );

    goingUp$.subscribe(() => (this.isVisible = true));
    goingDown$.subscribe(() => (this.isVisible = false));
  }

}

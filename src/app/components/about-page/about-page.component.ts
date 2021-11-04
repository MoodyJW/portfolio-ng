import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  AnimationQueryOptions,
  state,
} from '@angular/animations';

export const optional: AnimationQueryOptions = { optional: true };

export const fader = trigger('fader', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          left: 0,
          padding: '0 1em',
          width: '100%',
          height: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ],
      optional
    ),
    query(
      ':enter',
      [
        animate(
          '600ms ease',
          style({
            opacity: 1,
            transform: 'scale(1) translateY(0)',
          })
        ),
      ],
      optional
    ),
  ]),
]);

const showHide = trigger('showHide', [
  state('closed', style({ height: '0px', overflow: 'hidden' })),
  state('open', style({ height: '*', overflow: 'hidden' })),
  transition('open <=> closed', animate('900ms ease-in-out')),
]);

const rotatedState = trigger('rotatedState', [
  state('default', style({ transform: 'rotate(0)' })),
  state('rotated', style({ transform: 'rotate(90deg)' })),
  transition('rotated <=> default', animate('900ms ease-out')),
]);

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [fader, showHide, rotatedState],
})
export class AboutPageComponent implements OnInit {
  short = true;
  sectionIsOpen = [...Array(4)].map(() => 'closed');
  rotatedState = [...Array(4)].map(() => 'default');

  constructor() {}

  ngOnInit(): void {}

  toggleShowHide(index: number): void {
    this.rotatedState[index] =
      this.rotatedState[index] === 'default' ? 'rotated' : 'default';
    this.sectionIsOpen[index] =
      this.sectionIsOpen[index] === 'closed' ? 'open' : 'closed';
  }
}

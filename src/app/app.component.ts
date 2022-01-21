import { Component } from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from "@angular/animations";

let DEFAULT_DURATION = 300;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'cloudCity';
  collapsed = false;
  collapseArr = [
    {
      collapse: true
    },
    {
      collapse: false
    },
    {
      collapse: false
    },
    {
      collapse: false
    },
    {
      collapse: false
    },
    {
      collapse: false
    }
  ]
  toggle(i: number) {
    this.collapseArr[i].collapse = !this.collapseArr[i].collapse;
  }
}

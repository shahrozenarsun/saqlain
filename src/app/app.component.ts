import { Component } from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from "@angular/animations";

let DEFAULT_DURATION = 250;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('collapse', [
  //     state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
  //     state('true', style({ height: '0', display: 'none' })),
  //     transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
  //     transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
  //   ])
  // ]
})
export class AppComponent {
  title = 'cloudCity';
  collapsed = false;
  collapseArr = [
    {
      collapse: true
    },
    {
      collapse: true
    },
    {
      collapse: true
    },
    {
      collapse: true
    },
    {
      collapse: true
    },
    {
      collapse: true
    }
  ]
  toggle(i: number) {
    this.collapseArr[i].collapse = !this.collapseArr[i].collapse;
  }
  closeRest(i: number) {
    this.collapseArr.forEach((val, index) => {
      if (index !== i) {
        val.collapse = true;
      }
    })
  }
}

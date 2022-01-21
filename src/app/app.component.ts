import {Component, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('videoPlayer') videoPlayer: any;
  modal: any;
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
  ];

  constructor(private modalService: NgbModal) {
  }

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
  onVideoClicked(): void {
    this.modal = this.modalService.open(this.videoPlayer,
      {
        centered: true
      });
  }
  openWhitePaper(): void {
    window.open('https://cloudcitymeta.com/white-paper.pdf', '_blank');
  }
}

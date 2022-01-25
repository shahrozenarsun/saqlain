import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
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
}

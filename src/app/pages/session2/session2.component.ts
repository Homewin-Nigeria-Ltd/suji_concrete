import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-session2',
  templateUrl: './session2.component.html',
  styleUrls: ['./session2.component.scss'],
})
export class Session2Component implements OnInit {
  constructor() {}

  isPlay = true;

  @ViewChild('video') video: any;

  ngOnInit(): void {
    this.isPlay = true;
    let vid = this.video.nativeElement;
    vid.loop = 'loop';
    vid.play();
  }
  play() {
    this.isPlay = true;
    let vid = this.video.nativeElement;
    vid.play();
  }
  pause() {
    this.isPlay = false;
    let vid = this.video.nativeElement;
    vid.pause();
  }
}

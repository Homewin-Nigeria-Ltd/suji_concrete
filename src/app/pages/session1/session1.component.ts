import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular/angular/src/swiper.component';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);


@Component({
  selector: 'app-session1',
  templateUrl: './session1.component.html',
  styleUrls: ['./session1.component.scss'],
})
export class Session1Component implements OnInit {

  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  constructor() {}
  ngOnInit(): void {}


  slideNext(){
    this.swiperRef!.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiperRef!.swiperRef.slidePrev(100);
  }
}

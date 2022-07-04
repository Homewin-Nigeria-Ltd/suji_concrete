import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);


@Component({
  selector: 'app-session4',
  templateUrl: './session4.component.html',
  styleUrls: ['./session4.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Session4Component implements OnInit {
  constructor() {}

  imgCollection: Array<object> = [
    {
      image: 'https://loremflickr.com/g/600/400/paris',
      path: 'https://loremflickr.com/g/1200/800/paris',
      alt: 'Image 1',
      title: 'Image 1',
    },
    {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      path: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 2',
      alt: 'Image 2',
    },
    {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      path: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 3',
      alt: 'Image 3',
    },
    {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      path: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 4',
      alt: 'Image 4',
    },
    {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      path: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5',
    },
    {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      path: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 6',
      alt: 'Image 6',
    },
    {
      image: 'https://loremflickr.com/600/400/brazil,rio',
      path: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 4',
      alt: 'Image 4',
    },
    {
      image: 'https://loremflickr.com/600/400/paris,girl/all',
      path: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5',
    },
  ];

  ngOnInit(): void {}
}
